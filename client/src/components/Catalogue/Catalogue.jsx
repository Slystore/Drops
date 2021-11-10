import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Product from "../Product/Product";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Paginado from "./Paginado";

import { Link } from "react-router-dom";
import './Catalogue.css';
import {addToCart, storage} from '../../redux/cart/cartActions';
import { addToCartTomi, loadCartTomi } from "../../redux/cartTomi/cartActionTomi";
import { getRatings } from "../../redux/rating/ratingActions";
import { getAll, getProducts, filterBrand, filterCategory, filtersReset, saveFilteredDataBrand, saveFilteredDataCategory, restoreData, filterPrice, orderProducts, orderMethod } from "../../redux/products/productsAction";
import { getBrands } from "../../redux/brand/brandActions";
import { getCategories } from "../../redux/category/categoriesActions";

function Catalogue() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(loadCartTomi())  
      dispatch(getRatings());  
 }, [dispatch]);
  const { products } = useSelector((state) => state.productReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);
  const { brands } = useSelector((state) => state.brandReducer);


  const [currPage, setCurrPage] = useState(1);
  const [cardsxPage, setcardsxPage] = useState(10);
  const [filtros, setFiltros] = useState([]);
  const [precio, setPrecio] = useState(1);
  const [nada, setNada] = useState([]);
  const [order, setOrder] = useState('name');
  
  const lastProduct = currPage * cardsxPage
  const firstProduct =  lastProduct - cardsxPage;

  const currProducts = products.slice(firstProduct, lastProduct);

  const menuCategorias = document.getElementById('categories')
  const menuMarcas = document.getElementById('brands')
  // setNada([...products])

  // nada = nada.filter(e => {
  //   if(e.name === 'Air Force 1 Felt GS') e.status = 'nada'
  // })
  // console.log(prueba)
  // prueba.status = 'nada'

  const paginado = (pagNumber) => {
      setCurrPage(pagNumber)
  }

  function handleFilterBrand(e) {
    e.preventDefault();
    console.log(e.target.value)
    dispatch(saveFilteredDataBrand(e.target.value));
     dispatch(filterBrand(e.target.value));
     setFiltros([...filtros, e.target.value])
  }

  function handleFilterCategory(e) {
    e.preventDefault();
    console.log(e.target.value)

    dispatch(saveFilteredDataCategory(e.target.value));
   dispatch(filterCategory(e.target.value));
   setFiltros([...filtros, e.target.value])
  }

  function handleResetFilters(e) {
    e.preventDefault();
   dispatch(filtersReset());
   setFiltros([])
   menuCategorias.selectedIndex = 0
   menuMarcas.selectedIndex = 0
  }
  
  const handleAddCart = (id) => {
  //   dispatch (addToCart(id))
  //  dispatch(storage(id));
  //  dispatch(addToCartTomi(id))
}

const handlePrice = (e) => {
  e.preventDefault()
  setPrecio(e.target.value)
  console.log(precio)
  // dispatch(filterPrice(precio))
}

const handleOrder = (e) => {
  e.preventDefault()
  setOrder(e.target.value)
  dispatch(orderProducts(e.target.value))
}

const handleOrderMethod = (e) => {
  e.preventDefault()
  dispatch(orderMethod(e.target.value, order))
  console.log(e.target.value)
}

const deleteFilter = (data) => {

  dispatch(restoreData(data))
  setFiltros([
      ...filtros.filter(
          item => data !== item
      )
      ])
}

  return (
    <div className="CatologueContainer">
       
      <NavBar />

      <div className="Portada"></div>

      <div className="Info">
        
        <div className="Filtros"> 

          <div style={{padding:'20px 0'}}><h1>Filtros</h1></div>
          <div className="TitleFilter">Filtrar por Categoría</div>
          <div className="SelectFilter">
            <select className="Select" id='categories' onChange={(e) => handleFilterCategory(e)} >
              <option value="All" >Categorías</option>
              {categories &&
                categories.map((category) => {
                  return (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="TitleFilter">Filtrar por Marca</div>
          <div  className="SelectFilter">
            <select className="Select" id='brands'onChange={(e) => handleFilterBrand(e)}>
              <option value="All" >Todas</option>
              {brands &&
                brands.map((brand) => {
                  return (
                    <option key={brand.id} value={brand.name}>
                      {brand.name}
                    </option>
                  );
                })}
            </select>
          </div>

          <div>
                <select onChange={handleOrder}>
                  <option> Ordenamiento </option>
                  <option value='name'> Name </option>
                  <option value='price'> Price </option>
                </select>
          </div>

          
          <form onClick={handleOrderMethod}>
            <label>ASC<input type='radio' name='ordenacion' value='asc'/></label>
            <label>DESC<input type='radio' name='ordenacion' value='desc'/></label>
          </form>
          
          
          <button onClick={handleResetFilters}> borrar filtros </button>
          <div>
            
            {
                filtros && filtros.map(el => {
                return(
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <p key={el} style={{ fontSize: '10px'}}> {el} </p>
                        <button style={{ width: '20px', height: '10px', margin: '0 auto', fontSize: '5px'}} onClick={ () => deleteFilter(el) }> X </button>
                    </div>
                )})
            }
        </div>

        </div>

        <div className="Productos">
          {
          currProducts && currProducts.map((product, index) => {
            console.log(product.Sizes,"sizeslogueado")
              return (
                product && (<Link to={`/catalogue/${product.id}`} key={index}>
                  <div className="Shoes" key={index}>
                      <Product
                        id={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        status={product.status}
                        description={product.description}
                        Sizes = {product.Sizes}  
                      />
                  </div>
                </Link>)
              );
            })}

          <div className="Paginado">
            <Paginado 
              cardsxPage={cardsxPage} 
              products={products.length}
              paginado={paginado} 
            />
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default Catalogue;


// function App() {
//   const [filtrado, setFiltrado] = useState({})
//   const [select, setSelect] = useState('')
//   const [data, setData] = useState(allMocks)
//   const dispatch = useDispatch()
  

//   useEffect(  () => {
    

//   },[dispatch]);

//   const array = [1,2,3,4,5,6,7,8,9,10]
//   const nada = {}
//   let sarasa = allMocks.filter(e => e.name.includes('Nike'))
//   const sarasa2 = allMocks.filter(e => !e.name.includes('Nike'))
//   let nada2 = {...nada, ['Nike']: sarasa2}
//   console.log('esto es todo',allMocks)
//   console.log('esto es el array filtrado',sarasa)
//   console.log('este es el objeto',nada2)
//   console.log('este es el interior de la propiedad nike',nada2.Nike)

//   if(nada2.hasOwnProperty('Nike')) {
//     sarasa = sarasa.concat(nada2['Nike'])
//     delete nada2['Nike']
//   } else console.log('chau')

//   console.log('este es el array original sin filtros', allMocks )
//   console.log('este es el array filtrado despues del concat', sarasa )
//   console.log('este es el objeto despues del concat', nada2 )


//   const filtros = []

//   const handleChange = (e) => {
//     e.preventDefault()
//     setSelect(e.target.value)
//   }

//   const handleSelect = (e) => {
//     e.preventDefault()
//     console.log(e.target.value)
//     const sarasa = data.filter(e => e.name.includes(e.target.value))
//     console.log(sarasa)
//     // const sarasa2 = data.filter(e => !e.name.contains(e.target.value))
//     // setFiltrado({...filtrado, [e.target.value]: sarasa2})
//     // setData(sarasa)

//   }

//   const handleMinus = (e) => {
//     e.preventDefault()

//   }
//   const handlePlus = (e) => {
//     e.preventDefault()

//   }
 
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
      
//      <select onChange={handleSelect}>
//         <option> seleccionar</option>
//         <option value='Nike'> nike</option>
//         <option value='Jordan'> jordan</option>
//         {array.map(e => <option value={e}>{e}</option>)}
       
//      </select>
//     
//      </div>
//   );
// }
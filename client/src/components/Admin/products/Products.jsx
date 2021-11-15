import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import {
  getProducts,
  getProductsByName,
} from "../../../redux/products/productsAction";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Grid,
  Modal,
  Box,
} from "@mui/material";
import ProductButtons from "./ProductButtons";
import { getBrands } from "../../../redux/brand/brandActions";
import { getCategories } from "../../../redux/category/categoriesActions";
import { getSizes } from "../../../redux/sizes/sizeActions";
import Paginado from "../../Catalogue/Paginado";
import swal from "sweetalert";
import { PutProduct, updateDiscountById, unSubscribeDiscountById } from "../../../redux/products/productsAction";


const Products = () => {
  const dispatch = useDispatch();

  const [, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cardsxPage] = useState(8);
  const [currPage, setCurrPage] = useState(1);
  const lastProduct = currPage * cardsxPage;
  const firstProduct = lastProduct - cardsxPage;
  const [, setCategory] = useState('');


  let shoes = useSelector((state) => state.productReducer.products);
  const currProducts = shoes.slice(firstProduct, lastProduct);
  const { brands } = useSelector((state) => state.brandReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);
  const { sizes } = useSelector((state) => state.sizeReducer);

  useEffect(() => {
    dispatch(getProducts());
    setProductos(shoes);
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getSizes());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);

  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);

  const seleccionarProduct = (elemento, caso) => {
    setInput({
      id: elemento.id,
    });
    //console.log("esta es mi elemento dsp del set ", elemento.id);
    if (caso === "Editar") {
      handleOpen();
    } else {
      handleClose();
    }
  };

  const promocionarProduct = (elemento) => {
    
      setInput2({
        ...input2,
        id: elemento.id,
        porcentage2: elemento.Discounts !== null ? elemento.Discounts : ''
      });
      setInput3({
        ...input3,
        id: elemento.id,
      });
    
    handleOpen2()
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    dispatch(getProductsByName(busqueda));
  };

  const paginado = (pagNumber) => {
    setCurrPage(pagNumber);
  };

  // const [id, setId] = useState(0);
  const [talle, setTalle] = useState(0);
  const [talleUi, setTalleUi] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [input, setInput] = useState({
    id: "",
    name: "",
    image: "",
    description: "",
    price: 0,
    status: "",
    brandId: 0,
    categoryId: "",
    stock: [],
  });
  const [input2, setInput2] = useState({
    id: "",
    porcentage: 0,
    porcentage2: 0
  });

  const [input3, setInput3] = useState({
    id: "",
    quantity: 0,
    porcentage: 0
  });

  const handleChangeForm2 = (e) => {
    e.preventDefault()
    setInput2({
      ...input2,
      porcentage: parseInt(e.target.value)
    })
  }
  
  const handleChangeForm3 = (e) => {
    e.preventDefault()
    setInput3({
      ...input3,
      [e.target.name]: parseInt(e.target.value)
    })
  }

  const handleSubmit2 = (e) => {
    e.preventDefault()
    setInput(input2 => {
      return {
        id: input2.id,
        porcentage: input2.porcentage
      }
    })
    dispatch(updateDiscountById(input2))
    console.log(input2)
  }

  const handleUndo = (e) => {
    e.preventDefault()
    dispatch(unSubscribeDiscountById(input2.id))
  }

  const handleSubmit3 = (e) => {
    e.preventDefault()
    console.log(input3)
  }

  const handleChangeForm = (e) => {
    if (e.target.name === "price") {
      setInput((state) => {
        return {
          ...state,
          price: Number(e.target.value),
        };
      });
    } else {
      setInput((state) => {
        return {
          ...state,
          [e.target.name]: e.target.value,
        };
      });
    }
  };

  const handleChangeCategory = (e) => {
    e.preventDefault()

    let catFilter = categories.filter(cat => cat.name === e.target.value)
    catFilter = catFilter[0].id

    if(input.categoryId === undefined){
      setInput(  {
        ...input,
      categoryId: [catFilter] 
    })
    }
    else{
      setInput(  {
        ...input,
        categoryId: [...input.categoryId, catFilter] 
    })
    
    setCategory(e.target.value)
  }
};

  const agregarBrand = (e) => {
    setInput({
      ...input,
      brandId: parseInt(e.target.value),
    });
  };
  const agregarDieta = (e) => {
    setInput({
      ...input,
      status: e.target.value,
    });
  };
  const handleTalle = (e) => {
    setTalle(e.target.value);
  };

  const handleCantidad = (e) => {
    let talle = parseInt(e.target.value);
    setCantidad(talle);
  };

  const agregarStock = (e) => {
    e.preventDefault();
    //se filtran los talles para encontrar el objeto cuyo valor coincide el que se aloja en talle
    let sizeFilter = sizes.filter((e) => e.number === +talle);

    let sizeNumber = sizeFilter[0].number
    sizeFilter = sizeFilter[0].id
    //creo un array que guarda el id del talle y su cantidad
    let sizeStock = [sizeFilter, cantidad]
    //se guarda en el state local talleUi el talle en numeros y su cantidad, para mostrarlo en la parte de abajo del formulario
    setTalleUi([...talleUi, [sizeNumber, cantidad] ]);
    //actualiza el array stock del formulario controlado input con lo guardado en sizeStock
    if(input.stock === undefined){
      setInput(  {
        ...input,
      stock: [sizeStock] 
    })
    } else {
      setInput(  {
        ...input,
      stock: [...input.stock, sizeStock] 
    })
    }
  };

  const deleteCategory = (data) => {
    setInput({
      ...input,
      categoryId: input.categoryId.filter((category) => data !== category),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch( PutProduct(input) );
    console.log(input);
    swal("", "Producto Actualizado!", "success", {
      buttons: false,
    });
    setInput({
      id: "",
      name: "",
      image: "",
      description: "",
      price: 0,
      status: "",
      stock: [],
      brandId: 0,
      categoryId: "",
    });
    window.location.replace("");
  };

  const restore = (e) => {
    e.preventDefault()
    dispatch(getProducts())
    document.getElementById('hola').value= ''
    setBusqueda('')
    

}
  

  return (
    <Grid style={{ overflow: "scroll", overflowX: "hidden", height: "100vh" }}>
    <div>
    <ProductButtons searchbar={handleSearch} restore={restore}/>
    </div>  
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Nombre</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Estado</TableCell>
              <TableCell align="left">Actualizar</TableCell>
              <TableCell align="left">Promociones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currProducts &&
              currProducts.map((el) => {
                return (
                  <TableRow
                    key={el.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {el.id}
                    </TableCell>
                    <TableCell align="left">{el.name}</TableCell>
                    <TableCell align="left">{el.price}</TableCell>
                    <TableCell align="left">{el.status}</TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#555" }}
                        onClick={() => {
                          seleccionarProduct(el, "Editar");
                        }}
                      >
                        Editar
                      </Button>
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#555" }}
                        onClick={() => promocionarProduct(el)}
                        >
                        Promocionar
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxModal">
          <div className="formModal">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="formProduct">
                <div className="firstBoxProduct">
                  <div className="boxInputProduct">
                    <p className="titleProduct"> ID </p>
                    <input
                      className="inputProduct"
                      type={"text"}
                      name="id"
                      value={input.id}
                      onChange={handleChangeForm}
                      autoComplete="off"
                    />
                  </div>
                  <div className="boxInputProduct">
                    <p className="titleProduct"> Nombre </p>
                    <input
                      className="inputProduct"
                      type={"text"}
                      name="name"
                      onChange={handleChangeForm}
                      autoComplete="off"
                    />
                  </div>

                  <div className="boxInputProduct">
                    <p className="titleProduct"> Imagen </p>
                    <input
                      className="inputProduct"
                      type={"text"}
                      name="image"
                      onChange={handleChangeForm}
                    />
                  </div>

                  <div className="boxInputProduct">
                    <p className="titleProduct"> Price </p>
                    <input
                      className="inputProduct"
                      type={"number"}
                      name="price"
                      onChange={handleChangeForm}
                    />
                  </div>
                  <div className="boxTextarea">
                    <textarea
                      className="textarea"
                      name="description"
                      onChange={handleChangeForm}
                      placeholder="Describe the product"
                    />
                  </div>
                </div>
                <div className="secondBoxProduct">
                  <div className="boxSelectProduct">
                    <select
                      className="selectProduct"
                      onChange={(e) => agregarBrand(e)}
                    >
                      <option> Marcas </option>
                      {brands &&
                        brands.map((e) => (
                          <option key={e.id} value={e.id}>
                            {" "}
                            {e.name}{" "}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="boxSelectProduct">
                    <select
                      className="selectProduct"
                      onChange={(e) => handleChangeCategory(e)}
                    >
                      <option> Categoria </option>
                      {categories &&
                        categories.map((e) => (
                          <option key={e.id} value={e.name}>
                            {" "}
                            {e.name}{" "}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="boxSelectProduct">
                    <select
                      className="selectProduct"
                      onChange={(e) => agregarDieta(e)}
                    >
                      <option> Estado </option>
                      <option> disponible </option>
                      <option> no disponible </option>
                    </select>
                  </div>

                  <div className="boxSelectProduct">
                    <select
                      className="selectProduct"
                      onChange={(e) => handleTalle(e)}
                    >
                      <option> Tallas </option>
                      {sizes &&
                        sizes.map((e) => (
                          <option key={e.id} value={e.number}>
                            {" "}
                            {e.number}{" "}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="boxStockProduct">
                <p className="titleStockProduct">Existencias </p>
                <input
                  className="inputProduct"
                  type={"number"}
                  name="stock"
                  onChange={(e) => handleCantidad(e)}
                />
                <button
                  className="buttonStock"
                  onClick={(e) => agregarStock(e)}
                >
                  {" "}
                  Agregar{" "}
                </button>

                <div>
                  {talleUi &&
                    talleUi.map((el) => {
                      return (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            width: "100%",
                          }}
                        >
                          <p className="stockNumber" key={el[0]}>
                            {" "}
                            Talla:{el[0]} - Cantidad:{el[1]}
                            <button
                              className="deleteStock"
                              onClick={() => deleteCategory(el)}
                            >
                              {" "}
                              X{" "}
                            </button>
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="boxBtnCreate">
                <button className="btnCreate" type="submit" id="submit" onClick={handleSubmit}>
                  {" "}
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>



      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxModal">
          <div className="formModal">

            <form onSubmit={(e) => handleSubmit2(e)}>
              <div className="formProduct">
                <div className="firstBoxProduct">
                {/* Primer formulario -- descuento siempre */ }
                  <div className="boxInputProduct">
                    <label> Siempre
                    <input
                      className="inputProduct"
                      type={"checkbox"}
                      name="id"
                      value={input2.id}
                      
                      autoComplete="off"
                    />
                    </label>
                  </div>
                  <div className="boxInputProduct">
                    <label className="titleProduct"> porcentaje
                    <input
                      className="inputProduct"
                      type={"number"}
                      name="porcentage"
                      onChange={handleChangeForm2}
                      autoComplete="off"
                    />
                    </label>
                    <label className="titleProduct"> porcentaje2
                    <input
                      className="inputProduct"
                      type={"number"}
                      name="porcentage"
                      autoComplete="off"
                      value={input2.porcentage2}
                    />
                    </label>
                  </div>
                  <div className="boxBtnCreate">
                  <button className="btnCreate" type="submit" id="submit" onClick={handleSubmit2}>
                    {" "}
                    Guardar
                  </button>
                    {
                      input2.porcentage2 ? <button className="btnCreate" type="submit" id="submit" onClick={handleUndo}> Deshacer </button>
                      :
                      null
                    }

                </div>
                </div>
                </div>
              </form>
                           {/* segundo formulario -- descuento por cantidad */ }

            <form onSubmit={(e) => handleSubmit3(e)}>
              <div className="formProduct">
                <div className="firstBoxProduct">
                  <div className="boxInputProduct">
                    <label> Por cantidad
                    <input
                      className="inputProduct"
                      type={"checkbox"}
                      name="id"
                      value={input3.id}
                      
                      autoComplete="off"
                    />
                    </label>
                  </div>
                  <div className="boxInputProduct">
                    <label className="titleProduct"> Cantidad
                    <input
                      className="inputProduct"
                      type={"number"}
                      name="quantity"
                      min={1}
                      max={10}
                      onChange={handleChangeForm3}
                      autoComplete="off"
                    />
                    </label>
                  </div>
                  <div className="boxInputProduct">
                    <label className="titleProduct"> porcentaje
                    <input
                      className="inputProduct"
                      type={"number"}
                      name="porcentage"
                      min={1}
                      max={100}
                      onChange={handleChangeForm3}
                      autoComplete="off"
                    />
                    </label>
                  </div>
  
              <div className="boxBtnCreate">
                <button className="btnCreate" type="submit" id="submit" onClick={handleSubmit3}>
                  {" "}
                  Guardar
                </button>
              </div>
              </div>
              </div>
            </form>
          </div>
        </Box>
      </Modal>



      <Paginado
        style={{ margin: "0 auto" }}
        cardsxPage={cardsxPage}
        products={shoes.length}
        paginado={paginado}
      />
    </Grid>
  );
};

export default Products;



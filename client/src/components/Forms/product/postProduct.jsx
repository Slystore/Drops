import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postBrand } from '../../../redux/brand/brandActions';
import { productForm } from '../../../redux/products/productsAction';
import { getBrands } from '../../../redux/brand/brandActions';
import { getCategories } from '../../../redux/category/categoriesActions';
import { getSizes } from '../../../redux/sizes/sizeActions';
import swal from 'sweetalert';
import "./postProduct.css"


function validate(input) {
    let errors = {};
    if (!input.name) errors.name = 'Es obligatorio ingresar un nombre';
    else if (!input.image) errors.image = 'Es obligatorio ingresar una imagen';
    else if (!input.description) errors.description = 'Es obligatorio describir el producto';
    else if (!input.price || input.price < 1) errors.price = 'Es obligatorio ingresar un precio superior a 1';
    else if (!input.status) errors.status = 'Es obligatorio determinar si el producto se encuentra en stock o no';
    else if (!input.brand) errors.brand = 'Es obligatorio determinar una marca para el producto';
    else if (!input.categories || input.categories.length === 0) errors.categories = 'Es obligatorio ingresar las categorias a las que pertenece el producto';
    else if (!input.stock || input.stock.length === 0) errors.stock = 'Es obligatorio ingresar el stock del producto';
    return errors
};

export default function FormProductCreate() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [errors, setErrors] = useState({});

    //Me traigo el estado de redux de marcas, categorias y talles
    const { brands } = useSelector(state => state.brandReducer)
    const { categories } = useSelector(state => state.categoriesReducer)
    const { sizes } = useSelector(state => state.sizeReducer)

    //aca ejecutamos action que trae las brands, categories y sizes
    useEffect(() => {
        dispatch(getBrands())
        dispatch(getCategories())
        dispatch(getSizes())
    }, [dispatch])

    //estados locales para almacenar data del form
    const [category, setCategory] = useState('');
    const [talle, setTalle] = useState(0)
    const [talleString, setTalleString] = useState(0)
    const [talleUi, setTalleUi] = useState([])
    const [cantidad, setCantidad] = useState(0)
    //estado local para el formulario entero
    const [input, setInput] = useState({
        name: "",
        image: "",
        description: "",
        price: 0,
        status: "",
        brandId: 0,
        categoryId: [],
        stock: []
    })

    //variable para validar si el formulario esta completo y en funcion de eso disahabilitar el boton o no
    let prueba = !!(input.name && input.image && input.description && input.price && input.status && input.brandId && input.categoryId && input.stock.length > 0)


    //funcion que maneja los cambios en los inputs del formulario
    const handleChangeForm = (e) => {
        if (e.target.name === 'price') {
            setInput((state) => {
                return {
                    ...state,
                    price: Number(e.target.value)
                }
            })
            setErrors(validate({
                ...input,
                price: Number(e.target.value)
            }))
        } else {
            setInput((state) => {
                return {
                    ...state,
                    [e.target.name]: e.target.value
                }
            })
            setErrors(validate({
                ...input,
                [e.target.name]: e.target.value
            }))
        }
    }

    //Funcion que maneja el cambio en el estado de category en funcion de lo escrito en el input
    const handleChangeCategory = (e) => {
        e.preventDefault()

        let catFilter = categories.filter(cat => cat.name === e.target.value)
        catFilter = catFilter[0].id

        setInput({
            ...input,
            categoryId: [...input.categoryId, catFilter]
        })
        setCategory(e.target.value)
    }

    // funcion que maneja el option seleccionado del select y lo agrega al array brands del form
    const agregarBrand = (e) => {
        setInput({
            ...input,
            brandId: parseInt(e.target.value)
        })
    }
    // funcion que maneja el option seleccionado del select del status del productoy lo agrega al form
    const agregarDieta = (e) => {
        setInput({
            ...input,
            status: e.target.value
        })
    }
    //Guarda en el estado local talle, el talle seleccionado del select
    const handleTalle = (e) => {
        setTalle(e.target.value)
    }

    //Guarda en el estado local cantidad, el stock seleccionado del select para ese talle
    const handleCantidad = (e) => {
        let talle = parseInt(e.target.value)
        setCantidad(talle)
    }

    //Agrega un array con [0]=talle y [1]=cantidad al array (stock) del input (estado local)

    const agregarStock = (e) => {
        e.preventDefault()
        let prueba = sizes.filter(e => e.number === +talle)
        setTalleUi([...talleUi, [prueba[0].number, cantidad]])
        console.log(talleUi)
        setInput({
            ...input,
            stock: [
                ...input.stock,
                [parseInt(prueba[0].id), parseInt(cantidad)]
            ]
        })
        setCantidad(0)
    }

    // funcion que maneja el submit del formulario y que nos manda a la pagina principal
    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.name === undefined || input.image === undefined || input.description === undefined || input.price < 1 || input.status === undefined || input.brandId === undefined || input.categoryId === undefined || input.stock === undefined) {

            console.log('El formulario esta incompleto')


        } else {
            console.log(input)
            dispatch(productForm(input))
            swal("Good job!", "Producto Creado!", "success");
            setInput({
                name: "",
                image: "",
                description: "",
                price: 0,
                status: "",
                stock: [],
                brandId: 0,
                categoryId: [],
            })
            history.push('/admin/products')
        }
    }

    const deleteCategory = (data) => {
        setInput({
            ...input,
            categoryId: input.categoryId.filter(
                category => data !== category
            )
        })
    }
    return (
        <div >

            <form onSubmit={e => handleSubmit(e)}>
                <div className='formProduct'>
                    <div className='firstBoxProduct'>
                        <div className='boxInputProduct'>
                            <p className='titleProduct'> Nombre </p>
                            <input className='inputProduct' type={'text'} name='name' onChange={handleChangeForm} autoComplete='off' />
                            {errors.name && (<p className='errorText'>{errors.name}</p>)}
                        </div>

                        <div className='boxInputProduct'>
                            <p className='titleProduct'> Imagen </p>
                            <input className='inputProduct' type={'text'} name='image' onChange={handleChangeForm} />
                            {errors.image && (<p className='errorText'>{errors.image}</p>)}
                        </div>

                        <div className='boxInputProduct'>
                            <p className='titleProduct'> Price </p>
                            <input className='inputProduct' type={'number'} name='price' onChange={handleChangeForm} />
                            {errors.price && (<p className='errorText'>{errors.price}</p>)}
                        </div>
                        <div className='boxTextarea'>
                            <textarea className='textarea' name='description' onChange={handleChangeForm} placeholder='Describe the product' />
                            {errors.description && (<p className='errorText'>{errors.description}</p>)}
                        </div>
                    </div>
                    <div className='secondBoxProduct'>

                        <div className='boxSelectProduct'>
                            <select className='selectProduct' onChange={(e) => agregarBrand(e)}>
                                <option> Marcas </option>
                                {brands && brands.map(e => <option key={e.id} value={e.id}> {e.name} </option>)}
                            </select>
                        </div>

                        <div className='boxSelectProduct'>
                            <select className='selectProduct' onChange={(e) => handleChangeCategory(e)}>
                                <option> Categoria </option>
                                {categories && categories.map(e => <option key={e.id} value={e.name}> {e.name} </option>)}
                            </select>
                        </div>

                        <div className='boxSelectProduct'>
                            <select className='selectProduct' onChange={(e) => agregarDieta(e)}>
                                <option > Estado </option>
                                <option> disponible </option>
                                <option> no disponible </option>
                            </select>
                        </div>

                        <div className='boxSelectProduct'>
                            <select className='selectProduct' onChange={(e) => handleTalle(e)}>
                                <option> Tallas </option>
                                {sizes && sizes.map(e => <option key={e.id} value={e.number}> {e.number} </option>)}

                            </select>
                        </div>

                    </div>
                </div>

                <div className='boxStockProduct'>
                    <p className='titleStockProduct'>Existencias </p>
                    <input className='inputProduct' type={'number'} name='stock' onChange={(e) => handleCantidad(e)} />
                    <button className='buttonStock' onClick={e => agregarStock(e)}> Agregar </button>



                    <div>
                        {
                            talleUi && talleUi.map(el => {
                                return (
                                    <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
                                        <p className='stockNumber' key={el[0]}> Talla:{el[0]} - Cantidad:{el[1]}
                                            <button className='deleteStock' onClick={() => deleteCategory(el)}> X </button>
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>



                </div>
                <div className='boxBtnCreate'>
                    <button className='btnCreate' type='submit' id='submit' disabled={prueba ? false : true}> Crear</button>
                </div>
            </form>



            {/* <div>
                {
                    input.categoryId && input.categoryId.map(el => {
                        return (
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <p> {el} </p>
                                <button onClick={() => deleteCategory(el)}> X </button>
                            </div>
                        )
                    })
                }
            </div> */}

        </div>


    )

}



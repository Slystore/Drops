
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProducts, getProductsByName, getOrderedProducts } from "../../../redux/products/productsAction"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid, Modal, Box } from '@mui/material';
import ProductButtons from './ProductButtons';
import { getBrands } from '../../../redux/brand/brandActions';
import { getCategories } from '../../../redux/category/categoriesActions';
import { getSizes } from '../../../redux/sizes/sizeActions';
import Paginado from "../../Catalogue/Paginado";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { PutProduct } from "../../../redux/products/productsAction";

const Products = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [productos, setProductos] = useState([])
    const [busqueda, setBusqueda] = useState('')
    const [ordenar, setOrdenar] = useState('')

    const [cardsxPage, setcardsxPage] = useState(8);
    const [currPage, setCurrPage] = useState(1);
    const lastProduct = currPage * cardsxPage
    const firstProduct = lastProduct - cardsxPage;

    useEffect(() => {
        dispatch(getProducts())
        setProductos(shoes)
        dispatch(getBrands())
        dispatch(getCategories())
        dispatch(getSizes())

    }, [dispatch])

    let shoes = useSelector(state => state.productReducer.products);
    const currProducts = shoes.slice(firstProduct, lastProduct);
    const { brands } = useSelector(state => state.brandReducer)
    const { categories } = useSelector(state => state.categoriesReducer)
    const { sizes } = useSelector(state => state.sizeReducer)


    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const seleccionarProduct = (elemento, caso) => {
        setInput({
            id: elemento.id
        })
        //console.log("esta es mi elemento dsp del set ", elemento.id);
        if (caso === "Editar") {
            handleOpen()
        } else {
            handleClose()
        }


    };


    const handleSearch = (e) => {
        e.preventDefault()
        setBusqueda(e.target.value)
        dispatch(getProductsByName(busqueda));
    }

    const paginado = (pagNumber) => {
        setCurrPage(pagNumber)
    }

    const [category, setCategory] = useState('');
    const [talle, setTalle] = useState(0)
    const [talleString, setTalleString] = useState(0)
    const [talleUi, setTalleUi] = useState([])
    const [cantidad, setCantidad] = useState(0)
    //estado local para el formulario entero
    const [input, setInput] = useState({
        id: "",
        name: "",
        image: "",
        description: "",
        price: 0,
        status: "",
        brandId: 0,
        categoryId: "",
        stock: []
    })

    const handleChangeForm = (e) => {
        if (e.target.name === 'price') {
            setInput((state) => {
                return {
                    ...state,
                    price: Number(e.target.value)
                }
            })

        } else {
            setInput((state) => {
                return {
                    ...state,
                    [e.target.name]: e.target.value
                }
            })

        }
    }

    const handleChangeCategory = (e) => {
        setInput({
            ...input,
            categoryId: [e.target.name] = e.target.value
        })
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
    const deleteCategory = (data) => {
        setInput({
            ...input,
            categoryId: input.categoryId.filter(
                category => data !== category
            )
        })
    }

    const handleSubmit = (e) => {
        const x = PutProduct(input)
        console.log(input)
        swal("", "Producto Actualizado!", "success", {
            buttons: false
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
        })
        window.location.replace('')

    }

    return (
        <Grid style={{ overflow: 'scroll', overflowX: 'hidden', height: '100vh' }}>
            <ProductButtons searchbar={handleSearch} />
            <TableContainer >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Nombre</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Estado</TableCell>
                            <TableCell align="left">Actualizar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            currProducts && currProducts.map(el => {
                                return (
                                    <TableRow
                                        key={el.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {el.id}
                                        </TableCell>
                                        <TableCell align="left">{el.name}</TableCell>
                                        <TableCell align="left">{el.price}</TableCell>
                                        <TableCell align="left">{el.status}</TableCell>
                                        <TableCell align="left">
                                            <Button variant="contained" style={{ backgroundColor: "#555" }} onClick={() => { seleccionarProduct(el, "Editar") }} >Editar</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="boxModal">

                    <div className="formModal">
                        <form onSubmit={e => handleSubmit(e)}>
                            <div className='formProduct'>
                                <div className='firstBoxProduct'>
                                    <div className='boxInputProduct'>
                                        <p className='titleProduct'> ID </p>
                                        <input className='inputProduct' type={'text'} name='id' value={input.id} onChange={handleChangeForm} autoComplete='off' />
                                    </div>
                                    <div className='boxInputProduct'>
                                        <p className='titleProduct'> Nombre </p>
                                        <input className='inputProduct' type={'text'} name='name' onChange={handleChangeForm} autoComplete='off' />
                                    </div>

                                    <div className='boxInputProduct'>
                                        <p className='titleProduct'> Imagen </p>
                                        <input className='inputProduct' type={'text'} name='image' onChange={handleChangeForm} />
                                    </div>

                                    <div className='boxInputProduct'>
                                        <p className='titleProduct'> Price </p>
                                        <input className='inputProduct' type={'number'} name='price' onChange={handleChangeForm} />
                                    </div>
                                    <div className='boxTextarea'>
                                        <textarea className='textarea' name='description' onChange={handleChangeForm} placeholder='Describe the product' />
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
                                <button className='btnCreate' type='submit' id='submit' > Guardar</button>
                            </div>
                        </form>
                    </div>
                </Box>


            </Modal>

            <Paginado
                style={{ margin: '0 auto' }}
                cardsxPage={cardsxPage}
                products={shoes.length}
                paginado={paginado}
            />
        </Grid >
    )
}

export default Products

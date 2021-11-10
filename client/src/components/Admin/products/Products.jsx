
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProducts, getProductsByName, getOrderedProducts } from "../../../redux/products/productsAction"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid } from '@mui/material';
import ProductButtons from './ProductButtons';
import ProductUpdateButton from "./ProductUpdateButton"
import Paginado from "../../Catalogue/Paginado";

const Products = () => {
    const dispatch = useDispatch()

    const [productos, setProductos] = useState([])
    const [busqueda, setBusqueda] = useState('')
    const [ordenar, setOrdenar] = useState('')

    const [cardsxPage, setcardsxPage] = useState(8);
    const [currPage, setCurrPage] = useState(1);
    const lastProduct = currPage * cardsxPage
    const firstProduct =  lastProduct - cardsxPage;

    useEffect(() => {
        dispatch(getProducts())
        setProductos(shoes)
    }, [dispatch])
    
    let shoes = useSelector(state => state.productReducer.products);
    const currProducts = shoes.slice(firstProduct, lastProduct);

    // const handleOrder = e => {
    //     e.preventDefault()
    //     // setOrdenar(e.target.value)
    //     console.log(e.target.value)
    //     dispatch(getOrderedProducts(e.target.value))
    // }

    const handleSearch = (e) => {
        e.preventDefault()
        setBusqueda(e.target.value)
        dispatch(getProductsByName(busqueda));
    }

    const paginado = (pagNumber) => {
        setCurrPage(pagNumber)
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
                                            <ProductUpdateButton />
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>

            <Paginado 
            style={{margin: '0 auto'}}
            cardsxPage={cardsxPage} 
            products={shoes.length}
            paginado={paginado} 
            />
        </Grid>
    )
}

export default Products

// style={{height: '200px', width: '400px', margin: '25% auto', border: '1px black solid'}}
{/* <div>
<ProductButtons/>
<div > 
    <h2> Mapeo de productos </h2>
    <div>
        {
            hola && hola.map(prod => (
            <div>
                
                <ProductMap key={prod.id} name={prod.name} image={prod.image} price={prod.price} status={prod.status} data={prod} match={prod.id}/>
            </div>
        ))}
    
    </div>
</div>
</div> */}
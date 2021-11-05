
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "../../../redux/products/productsAction"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid, Modal, Box } from '@mui/material';
import ProductButtons from './ProductButtons';

const Products = () => {
    const dispatch = useDispatch()

    const [productos, setProductos] = useState([])

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const shoes = useSelector(state => state.productReducer.products);

    return (
        <Grid style={{ overflow: 'scroll', overflowX: 'hidden', height: '100vh' }}>
            <ProductButtons />
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
                            shoes && shoes.map(el => {
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
                                            <Button variant="contained" style={{ backgroundColor: "rgb(240, 240, 255)", color: "blue" }} >Editar</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
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
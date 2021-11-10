import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getBrands, getBrandsByName } from '../../../redux/brand/brandActions';
import BrandsButtons from './BrandsButton';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid, } from '@mui/material';
import Paginado from "../../Catalogue/Paginado";


const Brands = () => {
    const dispatch = useDispatch()

    const [productos, setProductos] = useState([])
    const [busqueda, setBusqueda] = useState('')
    const [ordenar, setOrdenar] = useState('')

    const [cardsxPage, setcardsxPage] = useState(8);
    const [currPage, setCurrPage] = useState(1);
    const lastProduct = currPage * cardsxPage
    const firstProduct =  lastProduct - cardsxPage;

    const brands = useSelector(state => state.brandReducer.brands);
    // console.log("brands", brands)


    useEffect(() => {
        dispatch(getBrands())
        setProductos(brands)

    }, [dispatch])

    let data = brands.slice(firstProduct, lastProduct)

    const handleSearch = (e) => {
        e.preventDefault()
        setBusqueda(e.target.value)
        dispatch(getBrandsByName(busqueda));
    }

    const paginado = (pagNumber) => {
        setCurrPage(pagNumber)
    }
    
    

    return (
        <Grid style={{ overflow: 'scroll', overflowX: 'hidden', height: '100vh' }}>

        <BrandsButtons/>
            <TableContainer >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Nombre</TableCell>
                            <TableCell align="left">Actualizar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {

                            data ? data.map(el => {
                                return (
                                    <TableRow
                                        key={el.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {el.id}
                                        </TableCell>
                                        <TableCell align="left">{el.name}</TableCell>
                                        <TableCell align="left">
                                            <Button variant="contained" disabled style={{ backgroundColor: "rgb(240, 240, 255)", color: "#ccc" }} >Editar</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            }) :
                                <div>
                                    <p>no funciona</p>
                                </div>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Paginado cardsxPage={cardsxPage} products={brands.length}
            paginado={paginado} />
        </Grid>
    );
};

export default Brands;

// <BrandsButtons searchbar={handleSearch}/>

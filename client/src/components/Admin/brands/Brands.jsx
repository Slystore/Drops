import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getBrands } from '../../../redux/brand/brandActions';
import BrandsButtons from './BrandsButton';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid, } from '@mui/material';

const Brands = () => {

    const brands = useSelector(state => state.brandReducer.brands);
    console.log("brands", brands)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBrands())
    }, [dispatch])


    return (
        <Grid style={{ overflow: 'scroll', overflowX: 'hidden', height: '100vh' }}>
            <BrandsButtons />
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

                            brands ? brands.map(el => {
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
        </Grid>
    );
};

export default Brands;
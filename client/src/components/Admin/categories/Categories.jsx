import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getCategories } from '../../../redux/category/categoriesActions';
import CategoriesButtons from './CategoriesButton';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid } from '@mui/material';

const Categories = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const categories = useSelector(state => state.categoriesReducer.categories);



    return (
        <Grid style={{ overflow: 'scroll', overflowX: 'hidden', height: '100vh' }}>
            <CategoriesButtons />
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
                            categories && categories.map(el => {
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
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default Categories;




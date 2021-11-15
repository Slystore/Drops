import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Button, } from "@mui/material";
import { getOrders } from "../../../redux/orders/ordersAction";
import { Link } from "react-router-dom";
const Orders = () => {
    const dispatch = useDispatch()

    const { orders } = useSelector((state) => state.ordersReducer)

    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])

    return (
        <Grid style={{ overflow: "scroll", overflowX: "hidden", height: "100vh" }}>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead >
                        <TableRow >
                            <TableCell>Orders ID</TableCell>
                            <TableCell align="left">User ID</TableCell>
                            <TableCell align="left">Estado de envio</TableCell>
                            <TableCell align="left">Estado de compra</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Visualizar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders &&
                            orders.map((el) => {
                                return (
                                    <TableRow
                                        key={el.id}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {el.id}
                                        </TableCell>
                                        <TableCell align="left">{el.UserId}</TableCell>
                                        <TableCell align="left">{el.shippingState}</TableCell>
                                        <TableCell align="left">{el.paymentState}</TableCell>
                                        <TableCell align="left">{el.status}</TableCell>
                                        <TableCell style={{ display: "flex", margin: 0, }} align="left">
                                            <Link to={`/admin/detail/${el.id}`}>
                                                <Button variant="contained" style={{ backgroundColor: "#555" }} >Ver</Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid >
    )
}

export default Orders
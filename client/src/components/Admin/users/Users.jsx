import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { editUsers, getUsers } from "../../../redux/users/userActions";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
} from "@mui/material";

const Users = () => {
  const dispatch = useDispatch();

  const [, setProductos] = useState([]);

  const [cardsxPage,] = useState(8);
  const [currPage, ] = useState(1);
  const lastProduct = currPage * cardsxPage;
  const firstProduct = lastProduct - cardsxPage;
  const { users } = useSelector((state) => state.usersReducer);
  const [data, setData] = useState({
    userType: "",
  });

  useEffect(() => {
    dispatch(getUsers());
    setProductos(users);
  }, [dispatch, users]);

  const handleSelect = async (e, id) => {
    console.log("valor del select", e.target.value, id);
    setData({
      ...data,
      userType: e.target.value,
    });
    console.log("usertype", data ? data.userType : "hola");
    await editUsers({ userType: e.target.value }, id);
    window.location.reload(false);
  };

  let nada = users.slice(firstProduct, lastProduct);

  return (
    <Grid style={{ overflow: "scroll", overflowX: "hidden", height: "100vh" }}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Nombre</TableCell>
              <TableCell align="left">Apellido</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Tipo</TableCell>
              <TableCell align="left">Actualizar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nada &&
              nada.map((el) => {
                return (
                  <TableRow
                    key={el.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {el.id}
                    </TableCell>
                    <TableCell align="left">{el.name}</TableCell>
                    <TableCell align="left">{el.surname}</TableCell>
                    <TableCell align="left">{el.mail}</TableCell>
                    <TableCell align="left">{el.userType}</TableCell>
                    <TableCell align="left">
                      <select
                        style={{
                          outline: "none",
                          height: 30,
                          width: 150,
                          border: "1px solid #555",
                          borderRadius: 3,
                          color: "#555",
                        }}
                        onChange={(e) => {
                          handleSelect(e, el.id);
                        }}
                      >
                        <option value="">Elige un type</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="banned">Banned</option>
                        <option value="disabled">Disabled</option>
                      </select>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Users;

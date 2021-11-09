
import React, { useEffect, useState } from "react" 
import { useSelector, useDispatch } from "react-redux"
import { editUsers, getUsers } from "../../../redux/users/userActions"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid, Modal, Box } from '@mui/material';

import UserMap from "./UserMap"

const Users = () => {
    const dispatch = useDispatch()
    const [data,setData] = useState({
        userType:""
    })
    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])
    const handleSelect = async (e,id) => {
        console.log('valor del select',e.target.value,id)
        setData({
          ...data,
          userType: e.target.value,
        });
        console.log('usertype',data?data.userType:"hola")
        await editUsers({userType:e.target.value},id)
        window.location.reload(false)
      };
    
    const usuarios = useSelector( state => state.usersReducer.users.users);
    console.log(usuarios)

    return(
        <Grid style={{ overflow: 'scroll', overflowX: 'hidden', height: '100vh' }}>
            <TableContainer >
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
                        {
                            usuarios&& usuarios.map(el => {
                                return (
                                    <TableRow
                                        key={el.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {el.id}
                                        </TableCell>
                                        <TableCell align="left">{el.name}</TableCell>
                                        <TableCell align="left">{el.surname}</TableCell>
                                        <TableCell align="left">{el.mail}</TableCell>
                                        <TableCell align="left">{el.userType}</TableCell>
                                        <TableCell align="left">
                                            <select onChange={(e)=>{handleSelect(e,el.id)}}>
                                                <option value="">Elige un type</option>
                                                <option value="admin">Admin</option>
                                                <option value="user">User</option>
                                                <option value="banned">Banned</option>
                                                <option value="disabled">Disabled</option>

                                            </select>
                                            {/* <Button variant="contained" style={{backgroundColor: "rgb(240, 240, 255)", color:"blue"}} >Editar</Button> */}
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

export default Users

        //      <div>
        //      <div > 
        //          <h2> Mapeo de usuarios </h2>
        //          <div>
        //              {
        //                  usuarios && usuarios.map(user => (
        //                  <div>
                             
        //                      <UserMap key={user.id} name={user.name} surname={user.surname} image={user.profileImg} mail={user.mail} password={user.password} type={user.userType} />
        //                  </div>
        //              ))}
                 
        //          </div>
        //      </div>
        //  </div>
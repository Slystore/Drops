
import React, { useEffect, useState } from "react" 
import { useSelector, useDispatch } from "react-redux"
import { editUsers, getUsers } from "../../../redux/users/userActions"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid, Modal, Box } from '@mui/material';
import Paginado from "../../Catalogue/Paginado";
import ProductButtons from "../products/ProductButtons";

import UserMap from "./UserMap"
import { getUsers, getUsersByName } from './../../../redux/users/userActions';

const Users = () => {
    const dispatch = useDispatch()
    
    const [productos, setProductos] = useState([])
    const [busqueda, setBusqueda] = useState('')
    const [ordenar, setOrdenar] = useState('')

    const [cardsxPage, setcardsxPage] = useState(8);
    const [currPage, setCurrPage] = useState(1);
    const lastProduct = currPage * cardsxPage
    const firstProduct =  lastProduct - cardsxPage;
    const {users} = useSelector( state => state.usersReducer);
    const [data,setData] = useState({
        userType:""
    })
    // console.log(users)

    useEffect( ()=>{
        dispatch(getUsers())
        setProductos(users)

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
    
    let nada = users.slice(firstProduct, lastProduct)

    console.log(users)
    console.log(productos)
    console.log(nada)

    

    const handleSearch = (e) => {
        e.preventDefault()
        setBusqueda(e.target.value)
        console.log(busqueda)
        dispatch(getUsersByName(busqueda));
    }

    const paginado = (pagNumber) => {
        setCurrPage(pagNumber)
    }
    
    const restore = (e) => {
        e.preventDefault()
        dispatch(getUsers())
    }

    const data = <button onClick={restore}>Restore</button>



    return(
        <Grid style={{ overflow: 'scroll', overflowX: 'hidden', height: '100vh' }}>

        <ProductButtons searchbar={handleSearch} info={data} restore={restore}/>
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
                        nada && nada.map(el => {
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
                                        {/*<Button variant="contained" style={{backgroundColor: "rgb(240, 240, 255)", color:"blue"}} >Editar</Button>*/}
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                   
                    </TableBody>
                </Table>
            </TableContainer>
            <Paginado cardsxPage={cardsxPage} products={users.length}
            paginado={paginado} />
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

        
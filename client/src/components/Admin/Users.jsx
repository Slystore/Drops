
import React, { useEffect, useState } from "react" 
import { useSelector, useDispatch } from "react-redux"
import { getUsers } from "../../redux/users/userActions"
import UserMap from "./UserMap"

const Users = () => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])
    
    const usuarios = useSelector( state => state.usersReducer.users.users);

    return(
        <div>
            <div > 
                <h2> Mapeo de usuarios </h2>
                <div>
                    {
                        usuarios && usuarios.map(user => (
                        <div>
                            
                            <UserMap key={user.id} name={user.name} surname={user.surname} image={user.profileImg} mail={user.mail} password={user.password} type={user.userType} />
                        </div>
                    ))}
                
                </div>
            </div>
        </div>
    )
}

export default Users
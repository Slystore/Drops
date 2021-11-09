const {Users} = require('../../db')
const bcrypt = require('bcrypt')
const authConfing = require('../../config/auth')
const newPassword = async (req,res)=>{
    console.log('este es el body q me llega',req.body)
    console.log('esta es la id',typeof req.params,req.params )
   let id = req.params.id
   let password = req.body.password
   parseInt(id)
    if(!newPassword){
        return res.status(400).json({msg:"Por favor ingrese una contraseña"})
    }
    try {
     let userPass = await Users.findOne({
         where:{
             id
         }
     })
     if(userPass){
        let passHash = await bcrypt.hash(password,+authConfing.rounds)
         let newPass = await Users.update({password:passHash},{
             where:{
                id
             }
         })
         newPass[0] !== 0 ? res.status(200).json({change:true,msg:"Contraseña restablecida",user:newPass}): res.status(400).json({msg:"Algo no ha salido bien "})
     }
        
    } catch (error) {
        console.log("rompo en el new password controller",error)
    }
}
module.exports = newPassword
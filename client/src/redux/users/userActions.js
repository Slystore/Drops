import axios from 'axios'

export  const userRegister = async(payload) => {
    try{
        console.log('estoy entrando',payload)
        let {data} = await axios.post('http://localhost:3001/api/register',payload)
        return data
    }catch(err){
        console.log('rompo en la action de user', err)
    }
} 
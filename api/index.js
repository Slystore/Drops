const server = require('./src/app')
const {conn} = require('./src/db')

conn.sync({force:true})
    .then(async() => {
        console.log('DB connected!')
        server.listen(3001,() => console.log('Server listen port 3001'))
    }).catch((e)=> console.log('connection falied',e))
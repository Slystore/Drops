
import { Link } from "react-router-dom"


const AdminNavBar = () => {
    return(
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Link to='/admin/orders'> <a> Orders </a> </Link>
            <Link to='/admin/products'> <a> Products </a> </Link>
            <Link to='/admin/users'> <a> Users </a> </Link>
            <Link to='/admin/newsletter'> <a> Newsletter </a> </Link>
            <Link to='/admin/appointment'> Turnos </Link>
            <Link to='/admin/onsale'> <a> Ofertas </a> </Link>
        </div>

    )
}

export default AdminNavBar
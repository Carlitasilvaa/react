import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar =() => {
    return (
        <nav className="nav">
            <h1 className="text-body-secondary">Sweet Home </h1>
            <div className="navbar">
                <Link to={"/category/Iluminación"}>Iluminación</Link>
                <Link to={"/category/Textiles"}>Textiles</Link>
                <Link to={"/category/Decoración de pared"}>Decoracion de Pared</Link>
                <Link to={"/category/Plantas y macetas"}>Plantas y Macetas</Link>
                <Link to={"/category/Arte"}>Arte</Link>
                <Link to={"/category/Decoración de mesa"}>Decoracion de Mesa</Link>
            </div>
            <CartWidget/>
        </nav>
    )
} 
export default NavBar
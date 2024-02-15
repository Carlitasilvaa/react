import CartWidget from "../CartWidget/CartWidget"


const NavBar =() => {
    return (
        <nav>
            <h1 className="text-body-secondary">Sweet Home </h1>
            <div>
                <button>Shop</button>
                <button>Inspiracion</button>
                <button>Quienes Somos</button>
            </div>
            <CartWidget />
        </nav>
    )
} 
export default NavBar
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import CartItem from "../cartItem/cartItem";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total ${total}</h3>
            <button onClick={() => clearCart()} className="button">Limpiar carrito</button>
            <Link to="/checkout" className="opcion">Checkout</Link>
        </div>
    );
};

export default Cart;

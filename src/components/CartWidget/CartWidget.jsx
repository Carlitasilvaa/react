import { useContext } from 'react';
import cart from './assets/cart.svg';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);


    return (
        <Link to='/cart' className='cartWidget'> 
            <div className='img'>
                <img src={cart} alt="cart-widget" />
                {totalQuantity > 0 && <span className="badge">{totalQuantity}</span>}
            </div>
        </Link>
    );
}

export default CartWidget;

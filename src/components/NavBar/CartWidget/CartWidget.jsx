// React
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/cartContext';

// CSS
import './CartWidget.css';

const CartWidget = () => {
  const {cart, sumQuantity} = useContext(CartContext);
  return (
    <div className="cart-container">
        <Link to='/cart' className='link'>
          <span>{sumQuantity}</span>
          <i className="fa-solid fa-cart-shopping cart"></i>
        </Link>
    </div>
  )
}

export default CartWidget;
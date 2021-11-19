import { useContext, useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../../../store/cart-context';

import styles from './CartButton.module.css';

export default function CartButton(props) {
  const [animateButton, setAnimateButton] = useState(false);
  const cartButtonClasses = `${styles['cart-button']} ${
    animateButton ? styles['bump'] : ''
  }`;

  const cartContext = useContext(CartContext);

  useEffect(() => {
    if (cartContext.items.length === 0) return;

    setAnimateButton(true);

    const timeout = setTimeout(() => {
      setAnimateButton(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [cartContext.items]);

  const quantity = cartContext.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <button className={cartButtonClasses} onClick={props.onClick}>
      <span>
        <FaShoppingCart />
        <span className={styles['cart-text']}>Your Cart</span>
      </span>
      <div className={styles['cart-count']}>{quantity}</div>
    </button>
  );
}

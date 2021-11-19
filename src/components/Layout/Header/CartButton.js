import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import styles from './CartButton.module.css';

export default function CartButton(props) {
  const [animateButton, setAnimateButton] = useState(false);
  const cartButtonClasses = `${styles['cart-button']} ${
    animateButton ? styles['bump'] : ''
  }`;

  return (
    <button className={cartButtonClasses} onClick={props.onClick}>
      <span>
        <FaShoppingCart />
        <span className={styles['cart-text']}>Your Cart</span>
      </span>
      <div className={styles['cart-count']}>0</div>
    </button>
  );
}

import { useState } from 'react';
import CartButton from './CartButton';

import styles from './Header.module.css';
import CartModal from '../CartModal/CartModal';
import Checkout from '../Checkout/Checkout';

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  function handleCartClick() {
    setShowCart(true);
  }

  function handleCartClose() {
    setShowCart(false);
  }

  function handleCartConfirm() {
    setShowCart(false);
    setShowCheckout(true);
  }

  function handleCheckoutClose() {
    setShowCheckout(false);
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ReactFood</h1>
      <CartButton onClick={handleCartClick} />
      {showCart && (
        <CartModal onClose={handleCartClose} onConfirm={handleCartConfirm} />
      )}
      {showCheckout && <Checkout onClose={handleCheckoutClose} />}
    </header>
  );
}

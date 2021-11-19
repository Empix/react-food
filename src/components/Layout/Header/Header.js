import { useState } from 'react';
import CartButton from './CartButton';

import styles from './Header.module.css';
import CartModal from '../CartModal/CartModal';

export default function Header() {
  const [showCart, setShowCart] = useState(false);

  function handleCartClick() {
    setShowCart(true);
  }

  function handleCartClose() {
    setShowCart(false);
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ReactFood</h1>
      <CartButton onClick={handleCartClick} />
      {showCart && <CartModal onClose={handleCartClose} />}
    </header>
  );
}

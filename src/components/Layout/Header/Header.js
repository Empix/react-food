import { useContext, useState } from 'react';
import CartButton from './CartButton';

import styles from './Header.module.css';
import CartModal from '../CartModal/CartModal';
import Checkout from '../Checkout/Checkout';
import CartContext from '../../../store/cart-context';

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const { items } = useContext(CartContext);

  const [isLoading, setIsLoading] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

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

  async function handleCheckoutConfirm(user) {
    setIsLoading(true);
    await fetch(
      'https://react-food-21b62-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user,
          items,
        }),
      }
    );
    setIsLoading(false);
    setDidSubmit(true);
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ReactFood</h1>
      <CartButton onClick={handleCartClick} />
      {showCart && (
        <CartModal onClose={handleCartClose} onConfirm={handleCartConfirm} />
      )}
      {showCheckout && (
        <Checkout
          onClose={handleCheckoutClose}
          onConfirm={handleCheckoutConfirm}
          isLoading={isLoading}
          didSubmit={didSubmit}
        />
      )}
    </header>
  );
}

import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../store/cart-context';
import Modal from '../../UI/Modal/Modal';
import Price from '../../UI/Price/Price';
import CartItem from './CartItem';

import styles from './CartModal.module.css';

export default function CartModal(props) {
  const [total, setTotal] = useState(0);
  const { items } = useContext(CartContext);

  useEffect(() => {
    setTotal(items.reduce((acc, item) => acc + item.price * item.quantity, 0));
  }, [items]);

  return (
    <Modal
      onClose={props.onClose}
      className={styles.cart}
      actionButtonText="Order"
      disableActionButton={items.length === 0}
    >
      {items.length === 0 && (
        <p className={styles.empty}>Your cart is empty.</p>
      )}
      {items.length > 0 && (
        <>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
          </ul>
          <footer className={styles['total-amount']}>
            <h3>Total Amount</h3>
            <Price price={total} className={styles.total} />
          </footer>
        </>
      )}
    </Modal>
  );
}

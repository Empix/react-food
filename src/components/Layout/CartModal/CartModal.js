import { useEffect, useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import Price from '../../UI/Price/Price';
import CartItem from './CartItem';

import styles from './CartModal.module.css';

export default function CartModal(props) {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Apple',
      price: 1.5,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Orange',
      price: 2.5,
      quantity: 2,
    },
    {
      id: 3,
      name: 'Banana',
      price: 3.5,
      quantity: 2,
    },
  ]);
  const [total, setTotal] = useState(0);

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

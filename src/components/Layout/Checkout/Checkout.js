import { useContext, useEffect, useRef, useState } from 'react';
import CartContext from '../../../store/cart-context';
import Modal from '../../UI/Modal/Modal';
import Price from '../../UI/Price/Price';
import styles from './Checkout.module.css';

const hasLength = (text, length) => text.trim().length >= length;

export default function Checkout(props) {
  const [formInputsValid, setFormInputsValid] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const [total, setTotal] = useState(0);
  const { items } = useContext(CartContext);

  useEffect(() => {
    setTotal(items.reduce((acc, item) => acc + item.price * item.quantity, 0));
  }, [items]);

  function handleSubmit(event) {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postalCode = postalCodeInputRef.current.value;
    const city = cityInputRef.current.value;

    const nameIsValid = hasLength(name, 3);
    const cityIsValid = hasLength(city, 3);
    const streetIsValid = hasLength(street, 3);
    const postalCodeIsValid = hasLength(postalCode, 5);

    const formIsValid =
      nameIsValid && cityIsValid && streetIsValid && postalCodeIsValid;

    setFormInputsValid({
      name: nameIsValid,
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid,
    });

    if (!formIsValid) {
      console.log('Submitted');
      return;
    }
  }

  return (
    <Modal
      onClose={props.onClose}
      className={styles.checkout}
      actionButtonText="Confirm"
      actionButtonProps={{ form: 'checkout-form' }}
    >
      <div className={styles.content}>
        <form onSubmit={handleSubmit} id="checkout-form">
          <div className={styles['input-box']}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              ref={nameInputRef}
              className={!formInputsValid.name ? styles['input-error'] : ''}
            />
          </div>

          <div className={styles['input-box']}>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              ref={streetInputRef}
              className={!formInputsValid.street ? styles['input-error'] : ''}
            />
          </div>

          <div className={styles['input-box']}>
            <label htmlFor="postal-code">Postal Code</label>
            <input
              type="text"
              id="postal-code"
              ref={postalCodeInputRef}
              className={
                !formInputsValid.postalCode ? styles['input-error'] : ''
              }
            />
          </div>

          <div className={styles['input-box']}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              ref={cityInputRef}
              className={!formInputsValid.city ? styles['input-error'] : ''}
            />
          </div>
        </form>
        <div className={styles['order-info']}>
          <h3>Order</h3>
          <ul>
            {items.length > 0 &&
              items.map((item) => (
                <li key={item.id}>
                  <span>
                    {item.name}{' '}
                    <span className={styles.quantity}>x{item.quantity}</span>
                  </span>
                  <Price className={styles.price} price={item.price} />
                </li>
              ))}
          </ul>
          <div className={styles.total}>
            <span>Total: </span>
            <Price price={total} />
          </div>
        </div>
      </div>
    </Modal>
  );
}

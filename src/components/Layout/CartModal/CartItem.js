import { useContext } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import CartContext from '../../../store/cart-context';
import Button from '../../UI/Button/Button';
import Price from '../../UI/Price/Price';
import styles from './CartItem.module.css';

export default function CartItem(props) {
  const { id, name, price, quantity } = props.data;

  const cartContext = useContext(CartContext);

  function handleRemove() {
    cartContext.removeItem(id, 1);
  }

  function handleAdd() {
    cartContext.addItem({
      id,
      name,
      price,
      amount: 1,
    });
  }

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <h3>{name}</h3>
        <div>
          <Price price={price} />
          <span>x{quantity}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <Button className={styles['plus']} onClick={handleAdd}>
          <FaPlus />
        </Button>
        <Button className={styles['minus']} onClick={handleRemove}>
          <FaMinus />
        </Button>
      </div>
    </li>
  );
}

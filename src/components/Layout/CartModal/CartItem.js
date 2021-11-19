import { FaMinus, FaPlus } from 'react-icons/fa';
import Button from '../../UI/Button/Button';
import Price from '../../UI/Price/Price';
import styles from './CartItem.module.css';

export default function CartItem(props) {
  const { name, price, quantity } = props.data;

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
        <Button className={styles['plus']}>
          <FaPlus />
        </Button>
        <Button className={styles['minus']}>
          <FaMinus />
        </Button>
      </div>
    </li>
  );
}

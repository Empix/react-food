import { useState, useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import CartContext from '../../../store/cart-context';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Price from '../../UI/Price/Price';
import styles from './MealItem.module.css';

export default function MealItem(props) {
  const { id, name, description, price } = props.data;

  const [amount, setAmount] = useState(1);
  const cartContext = useContext(CartContext);

  function handleAddToCart() {
    if (amount <= 0) return;

    const data = { id, name, price, amount };
    cartContext.addItem(data);
  }

  return (
    <li className={styles.item}>
      <div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <Price price={price} />
      </div>
      <div>
        <Input
          id={id}
          label="Amount"
          type="number"
          value={amount}
          min="1"
          onChange={({ target }) => setAmount(+target.value)}
        />
        <Button onClick={handleAddToCart}>
          <FaPlus />
          <span>Add</span>
        </Button>
      </div>
    </li>
  );
}

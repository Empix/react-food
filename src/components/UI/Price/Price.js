import styles from './Price.module.css';

export default function Price(props) {
  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: props.currency || 'USD',
  }).format(props.price);

  return <p className={`${styles.price} ${props.className || ''}`}>{price}</p>;
}

import styles from './Loading.module.css';

export default function Loading(props) {
  let size = props.size || 32;
  size = `${size}px`;

  let borderWidth = props.borderWidth || 5;
  borderWidth = `${borderWidth}px`;

  return (
    <div
      className={styles.loading}
      style={{ width: size, height: size, borderWidth }}
    ></div>
  );
}

import styles from './Button.module.css';

export default function Button(props) {
  return (
    <button
      className={`${styles.button} ${props.className || ''}`}
      onClick={props.onClick}
      disabled={props.disabled}
      {...props.buttonProps}
    >
      {props.children}
    </button>
  );
}

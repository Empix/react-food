import styles from './Input.module.css';

export default function Input(props) {
  const { id, label, type, value, onChange, ...rest } = props;

  return (
    <div className={`${props.className || ''} ${styles['input-wrapper']}`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} {...rest} />
    </div>
  );
}

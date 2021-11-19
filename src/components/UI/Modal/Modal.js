import Portal from '../../Helpers/Portal/Portal';
import Button from '../Button/Button';
import Card from '../Card/Card';

import styles from './Modal.module.css';

export default function Modal(props) {
  return (
    <Portal selector="#root">
      <div className={styles.backdrop} onClick={props.onClose} />
      <Card className={`${styles.modal} ${props.className || ''}`}>
        {props.children}
        <div className={styles.actions}>
          <Button className={styles['close-button']} onClick={props.onClose}>
            Close
          </Button>
          <Button
            disabled={props.disableActionButton}
            className={styles['action-button']}
            onClick={props.onConfirm}
          >
            {props.actionButtonText || 'Okay'}
          </Button>
        </div>
      </Card>
    </Portal>
  );
}

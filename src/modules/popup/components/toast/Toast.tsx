import styles from './Toast.module.scss';
import { IconClose } from '../../../../common/components/Icon/IconClose';
import { IconError } from '../../../../common/components/Icon/IconError';
import { ToastProgress } from './ToastProgress';
import classNames from 'classnames';
import { useCallback } from 'react';
import { IToast } from '../../interfaces/popup';
import { useDebounceModal } from '../../hooks/useDebounceModal';
import { EventBusToast } from '../../utils/eventBus';
import { EventBusNames } from '../../interfaces/eventBusNames';

export const Toast = (props: IToast) => {
  console.log(1);
  const handlerClose = useCallback(() => {
    EventBusToast.emit(EventBusNames.CLOSE_TOAST, {
      id: props.id,
      position: props.position,
    } as IToast);
  }, []);

  const { closeModal, animateClose } = useDebounceModal({ cb: handlerClose, delay: 450 });

  return (
    <div
      className={classNames(styles.toast, {
        [styles.closeToast]: animateClose,
      })}
    >
      {props.type ? (
        <div className={styles.icon}>
          <IconError />
        </div>
      ) : null}
      <div className={styles.text}>{props.text}</div>
      <div className={styles.close} onClick={closeModal}>
        <IconClose />
      </div>
      {props.timeout ? <ToastProgress setClose={closeModal} timeout={props.timeout} /> : null}
    </div>
  );
};

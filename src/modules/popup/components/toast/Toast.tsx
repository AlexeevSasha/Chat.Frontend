import styles from './Toast.module.scss';
import { IconClose } from '../../../../common/components/Icon/IconClose';
import { IconError } from '../../../../common/components/Icon/IconError';
import { ToastProgress } from './ToastProgress';
import classNames from 'classnames';
import { IToast } from '../../interfaces/popup';
import { useDebounceModal } from '../../hooks/useDebounceModal';
import { toast } from '../../utils/toast';
import { getTypeToast } from '../../utils/getStylesToast';

export const Toast = (props: IToast) => {
  const { closeModal, animateClose } = useDebounceModal({
    cb: () =>
      toast.close({
        id: props.id,
        position: props.position,
        text: '',
      }),
    delay: 450,
  });

  return (
    <div
      style={props.type && getTypeToast[props.type]}
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
      <div
        className={classNames(styles.close, {
          [styles.closeType]: props.type,
        })}
        onClick={closeModal}
      >
        <IconClose />
      </div>
      {props.timeout ? (
        <ToastProgress setClose={closeModal} timeout={props.timeout} isType={!!props.type} />
      ) : null}
    </div>
  );
};

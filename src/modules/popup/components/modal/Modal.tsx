import styles from './modal.module.scss';
import classNames from 'classnames';
import { useDebounceModal } from '../../hooks/useDebounceModal';
import { IModal } from '../../interfaces/popup';
import { modal } from '../../utils/modal';

export const Modal = ({ renderElement, id }: IModal) => {
  const { closeModal, animateClose } = useDebounceModal({
    cb: () => modal.close({ id }),
    delay: 250,
  });

  return (
    <div className={styles.modal}>
      <div
        className={classNames(styles.content, {
          [styles.contentClose]: animateClose,
        })}
      >
        {renderElement}
      </div>
      <div
        onClick={closeModal}
        className={classNames(styles.backdrop, {
          [styles.backdropClose]: animateClose,
        })}
      />
    </div>
  );
};

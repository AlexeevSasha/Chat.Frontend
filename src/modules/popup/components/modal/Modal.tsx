import { useCallback } from 'react';
import styles from './modal.module.scss';
import classNames from 'classnames';
import { useDebounceModal } from '../../hooks/useDebounceModal';
import { EventBusNames } from '../../interfaces/eventBusNames';
import { EventBusModal } from '../../utils/eventBus';
import { IModal } from '../../interfaces/popup';

export const Modal = ({ renderElement, id }: IModal) => {
  const handlerClose = useCallback(() => {
    EventBusModal.emit(EventBusNames.CLOSE_MODAL, { id });
  }, []);

  const { closeModal, animateClose } = useDebounceModal({ cb: handlerClose, delay: 250 });

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

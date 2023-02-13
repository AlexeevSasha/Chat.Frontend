import { useCallback, useState } from 'react';
import styles from './modal.module.scss';
import { EventBusModal } from '../../../../common/utils/eventBus';
import { EventBusNames } from '../../interfaces/modal';
import classNames from 'classnames';
import { useDebounceModal } from '../../hooks/useDebounceModal';

type Prop = {
  id: number;
  open?: boolean;
  renderElement?: JSX.Element;
};

export const Modal = ({ open, renderElement, id }: Prop) => {
  const [isOpen, setIsOpen] = useState(open || false);

  const handlerClose = useCallback(() => {
    EventBusModal.emit(EventBusNames.CLOSE_MODAL, { id });
    setIsOpen(false);
  }, []);

  const { closeModal, animateClose } = useDebounceModal({ cb: handlerClose, delay: 250 });

  return isOpen ? (
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
  ) : null;
};

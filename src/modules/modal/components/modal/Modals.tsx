import { useCallback, useState } from 'react';
import styles from './Modal.module.scss';
import { EventBusModal } from '../../../../common/utils/eventBus';
import { EventBusNames } from '../../interfaces/modal';
import classNames from 'classnames';

type Prop = {
  id: number;
  open?: boolean;
  renderElement?: JSX.Element;
};

export const Modals = ({ open, renderElement, id }: Prop) => {
  const [isOpen, setIsOpen] = useState(open || false);
  const [close, setClose] = useState(false);

  const closeModal = useCallback(() => {
    setClose(true);
    setTimeout(() => {
      EventBusModal.emit(EventBusNames.CLOSE_MODAL, { id });
      setIsOpen(false);
    }, 200);
  }, []);

  return isOpen ? (
    <div className={styles.modal}>
      <div
        className={classNames(styles.content, {
          [styles.contentClose]: close,
        })}
      >
        {renderElement}
      </div>
      <div onClick={closeModal} className={styles.backdrop} />
    </div>
  ) : null;
};

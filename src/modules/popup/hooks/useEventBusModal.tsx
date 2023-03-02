import { useEffect } from 'react';
import { EventBusNames } from '../../../common/interfaces/eventBusNames';
import { Modal } from '../components/modal/Modal';
import { IModal } from '../interfaces/popup';
import { modal } from '../utils/modal';

interface IProps {
  setModals: (prev: (value: Map<number, JSX.Element>) => Map<number, JSX.Element>) => void;
}

export const useEventBusModal = ({ setModals }: IProps) => {
  const addModal = (event: CustomEvent<IModal>) => {
    setModals((prev) => {
      const id = prev.size + 1;
      return new Map(prev).set(
        id,
        <Modal key={id} id={id} renderElement={event.detail?.renderElement} />
      );
    });
  };
  const deleteModal = (event: CustomEvent<IModal>) => {
    setModals((prev) => {
      const newModal = new Map(prev);
      event.detail.id && newModal.delete(event.detail.id);
      return newModal;
    });
  };

  useEffect(() => {
    modal.on(EventBusNames.OPEN_MODAL, addModal);
    modal.on(EventBusNames.CLOSE_MODAL, deleteModal);

    return () => {
      modal.off(EventBusNames.OPEN_MODAL, addModal);
      modal.off(EventBusNames.CLOSE_MODAL, deleteModal);
    };
  }, []);
};

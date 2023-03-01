import { useEffect } from 'react';
import { EventBusNames } from '../interfaces/eventBusNames';
import { EventBusModal } from '../utils/eventBus';
import { Modal } from '../components/modal/Modal';
import { IModal } from '../interfaces/popup';

interface IProps {
  setModals: (prev: (value: Map<number, JSX.Element>) => Map<number, JSX.Element>) => void;
}

export const useEventBusModal = ({ setModals }: IProps) => {
  const addModal = (detail: IModal) => {
    setModals((prev) => {
      const id = prev.size + 1;
      return new Map(prev).set(
        id,
        <Modal key={id} id={id} renderElement={detail?.renderElement} />
      );
    });
  };
  const deleteModal = (detail: IModal) => {
    setModals((prev) => {
      const newModal = new Map(prev);
      detail.id && newModal.delete(detail.id);
      return newModal;
    });
  };

  useEffect(() => {
    EventBusModal.on(EventBusNames.POPUP_MODAL, ({ detail }) => addModal(detail));
    EventBusModal.on(EventBusNames.CLOSE_MODAL, ({ detail }) => deleteModal(detail));

    return () => {
      EventBusModal.off(EventBusNames.POPUP_MODAL);
      EventBusModal.off(EventBusNames.CLOSE_MODAL);
    };
  }, []);
};

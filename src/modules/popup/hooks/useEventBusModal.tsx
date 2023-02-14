import { useEffect } from 'react';
import { EventBusNames } from '../interfaces/eventBusNames';
import { EventBusModal } from '../utils/eventBus';
import { Modal } from '../components/modal/Modal';

interface IProps {
  setModals: (prev: (value: Map<number, JSX.Element>) => Map<number, JSX.Element>) => void;
}

export const useEventBusModal = ({ setModals }: IProps) => {
  useEffect(() => {
    EventBusModal.on(EventBusNames.POPUP_MODAL, ({ detail }) => {
      setModals((prev) => {
        const id = prev.size + 1;
        return new Map(prev).set(
          id,
          <Modal key={id} id={id} open={detail?.open} renderElement={detail?.renderElement} />
        );
      });
    });
    EventBusModal.on(EventBusNames.CLOSE_MODAL, ({ detail }) => {
      setModals((prev) => {
        const newProducts = new Map(prev);
        detail.id && newProducts.delete(detail.id);
        return newProducts;
      });
    });
  }, []);
};

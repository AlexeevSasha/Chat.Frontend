import { useEffect } from 'react';
import { EventBusNames } from '../interfaces/eventBusNames';
import { Toast } from '../components/toast/Toast';
import { IPositionToast, IToast } from '../interfaces/popup';
import { toast } from '../utils/toast';

interface IProps {
  setToasts: (
    prev: (value: Map<IPositionToast, JSX.Element[]>) => Map<IPositionToast, JSX.Element[]>
  ) => void;
}

export const useEventBusModal = ({ setToasts }: IProps) => {
  const addToast = (event: CustomEvent<IToast>) => {
    setToasts((prev) => {
      const prevElements = Array.from(prev.get(event.detail.position)?.values() || []);
      return new Map(prev).set(event.detail.position, [
        ...prevElements,
        <Toast key={prevElements.length} id={prevElements.length} {...event.detail} />,
      ]);
    });
  };
  const deleteToast = (event: CustomEvent<IToast>) => {
    const { position, id } = event.detail;
    setToasts((prev) => {
      const newToast = new Map(prev);
      const allElementByPosition = prev.get(position);

      if (!allElementByPosition) return newToast;
      if (allElementByPosition.length <= 1) {
        newToast.delete(position);
        return newToast;
      } else {
        const test = allElementByPosition?.filter((el) => el.props.id !== id);
        return newToast.set(position, test);
      }
    });
  };

  useEffect(() => {
    toast.on(EventBusNames.POPUP_TOAST, addToast);
    toast.on(EventBusNames.CLOSE_TOAST, deleteToast);

    return () => {
      toast.off(EventBusNames.POPUP_TOAST, addToast);
      toast.off(EventBusNames.CLOSE_TOAST, deleteToast);
    };
  }, []);
};

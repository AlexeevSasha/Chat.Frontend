import { useEffect } from 'react';
import { EventBusNames } from '../interfaces/eventBusNames';
import { EventBusToast } from '../utils/eventBus';
import { Toast } from '../components/toast/Toast';
import { IPositionToast, IToast } from '../interfaces/popup';

interface IProps {
  setToasts: (
    prev: (value: Map<IPositionToast, JSX.Element[]>) => Map<IPositionToast, JSX.Element[]>
  ) => void;
}

export const useEventBusModal = ({ setToasts }: IProps) => {
  const addToast = (toast: IToast) => {
    setToasts((prev) => {
      const prevElements = Array.from(prev.get(toast.position)?.values() || []);
      return new Map(prev).set(toast.position, [
        ...prevElements,
        <Toast key={prevElements.length} id={prevElements.length} {...toast} />,
      ]);
    });
  };
  const deleteToast = (toast: IToast) => {
    setToasts((prev) => {
      const newToast = new Map(prev);
      const allElementByPosition = prev.get(toast.position);

      if (!allElementByPosition) return newToast;
      if (allElementByPosition.length <= 1) {
        newToast.delete(toast.position);
        return newToast;
      } else {
        const test = allElementByPosition?.filter((el) => el.props.id !== toast.id);
        return newToast.set(toast.position, test);
      }
    });
  };

  useEffect(() => {
    EventBusToast.on(EventBusNames.POPUP_TOAST, ({ detail }) => addToast(detail));
    EventBusToast.on(EventBusNames.CLOSE_TOAST, ({ detail }) => deleteToast(detail));

    EventBusToast.off(EventBusNames.POPUP_TOAST, ({ detail }) => addToast(detail));

    return () => {
      EventBusToast.off(EventBusNames.POPUP_TOAST);
      EventBusToast.off(EventBusNames.CLOSE_TOAST);
    };
  }, []);
};

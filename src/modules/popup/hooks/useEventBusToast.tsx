import { useEffect } from 'react';
import { EventBusNames } from '../interfaces/eventBusNames';
import { EventBusToast } from '../utils/eventBus';
import { Toast } from '../components/toast/Toast';
import { IPositionToast } from '../interfaces/popup';

interface IProps {
  setToasts: (
    prev: (value: Map<IPositionToast, JSX.Element[]>) => Map<IPositionToast, JSX.Element[]>
  ) => void;
}

export const useEventBusModal = ({ setToasts }: IProps) => {
  useEffect(() => {
    EventBusToast.on(EventBusNames.POPUP_TOAST, ({ detail }) => {
      setToasts((prev) => {
        const prevElements = Array.from(prev.get(detail.position)?.values() || []);
        return new Map(prev).set(detail.position, [
          ...prevElements,
          <Toast key={prevElements.length} id={prevElements.length} {...detail} />,
        ]);
      });
    });

    EventBusToast.on(EventBusNames.CLOSE_TOAST, ({ detail }) => {
      setToasts((prev) => {
        const newToast = new Map(prev);
        const allElementByPosition = prev.get(detail.position);

        if (!allElementByPosition) return newToast;
        if (allElementByPosition.length <= 1) {
          newToast.delete(detail.position);
          return newToast;
        } else {
          const test = allElementByPosition?.filter((el) => el.props.id !== detail.id);
          return newToast.set(detail.position, test);
        }
      });
    });
  }, []);
};

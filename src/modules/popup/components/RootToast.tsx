import { useState } from 'react';
import { createPortal } from 'react-dom';
import { getStylesPositionToast } from '../utils/getStylesPositionToast';
import { IPositionToast } from '../interfaces/popup';
import { useEventBusModal } from '../hooks/useEventBusToast';

export const RootToast = () => {
  const [toasts, setToasts] = useState<Map<IPositionToast, JSX.Element[]>>(new Map());

  useEventBusModal({ setToasts });

  return createPortal(
    Array.from(toasts.entries()).map(([position, elem]) => {
      return (
        <div key={position} style={{ position: 'fixed', ...getStylesPositionToast[position] }}>
          {elem}
        </div>
      );
    }),
    document.getElementById('portal-id') as HTMLElement
  );
};

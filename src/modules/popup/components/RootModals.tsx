import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useEventBusModal } from '../hooks/useEventBusModal';

export const RootModals = () => {
  const [modals, setModals] = useState<Map<number, JSX.Element>>(new Map());

  useEventBusModal({ setModals });

  return createPortal(
    Array.from(modals.values()),
    document.getElementById('portal-id') as HTMLElement
  );
};

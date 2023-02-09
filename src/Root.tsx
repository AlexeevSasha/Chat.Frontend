import { useEffect, useState } from 'react';
import { EventBusInstance } from './common/utils/EventBus';
import { Modals } from './modules/modal/components/Modals';
import { createPortal } from 'react-dom';

export const Root = () => {
  const [modal, setModal] = useState<(JSX.Element | null)[]>([]);

  useEffect(() => {
    EventBusInstance.on('test-modal', ({ detail }) => {
      setModal((prev) => [
        ...prev,
        <Modals key={prev.length} open={detail?.isOpen} elements={detail?.render} />
      ]);
    });
  }, []);

  return createPortal(modal, document.getElementById('portal-id') as HTMLElement);
};

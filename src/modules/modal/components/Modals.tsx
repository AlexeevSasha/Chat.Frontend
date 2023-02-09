import { useEffect, useState } from 'react';
import { EventBusInstance } from '../../../common/utils/EventBus';

type Prop = {
  open: boolean,
  elements: JSX.Element
};

export const Modals = ({ open, elements }: Prop) => {
  const [isOpen, setIsOpen] = useState(open || false);

  // useEffect(() => {
  //   EventBusInstance.on('test-modal', (detail) => {
  //     setIsOpen(detail.detail?.isOpen);
  //     detail.detail?.render && setRender(detail.detail?.render);
  //   });
  // }, []);

  return isOpen ? (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          background: 'white',
          width: '300px',
          height: '300px',
          zIndex: 10
        }}
      >
        {elements}
        <br />
        <br />
        <button onClick={() => setIsOpen(false)}>закрыть</button>
      </div>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          background: 'black',
          opacity: '0.4',
          zIndex: 8
        }}
      />
    </div>
  ) : null;
};

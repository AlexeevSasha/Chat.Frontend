import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/styles/styles.scss';
import { Test } from './Test';
import { Modals } from './modules/modal/components/Modals';
import { Root } from './Root';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <Test />
      <Root/>
  </>
);



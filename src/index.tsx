import React from 'react';
import ReactDOM from 'react-dom/client';
import './api/config/fetch.config';
import './styles/styles.scss';
import { RouterProvider } from 'react-router-dom';
import { useCreateRouter } from './common/hooks/useCreateRouter';
import { RootModals } from './modules/popup/components/RootModals';
import { RootToast } from './modules/popup/components/RootToast';
import { ContextProvider } from './common/components/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const Routing = () => <RouterProvider router={useCreateRouter()} />;

root.render(
  <>
    <ContextProvider>
      <Routing />
    </ContextProvider>
    <RootModals />
    <RootToast />
  </>
);

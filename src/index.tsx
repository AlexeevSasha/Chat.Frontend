import React from 'react';
import ReactDOM from 'react-dom/client';
import './api/config/fetch.config';
import './common/styles/styles.scss';
import { RouterProvider } from 'react-router-dom';
import { useCreateRouter } from './common/hooks/useCreateRouter';
import { RootModals } from './modules/popup/components/RootModals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const Routing = () => <RouterProvider router={useCreateRouter()} />;

root.render(
  <>
    <Routing />
    <RootModals />
  </>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RootModals } from './modules/modal/components/RootModals';
import { RouterProvider } from 'react-router-dom';
import { useCreateRouter } from './common/hooks/useCreateRouter';
import './common/styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const Routing = () => <RouterProvider router={useCreateRouter()} />;

root.render(
  <>
    <Routing />
    <RootModals />
  </>
);

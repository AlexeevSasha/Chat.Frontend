import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/styles/styles.scss';
import { RootModals } from './modules/modal/components/RootModals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: '/login',
    element: <SignInPage />,
  },
  {
    path: '/register',
    element: <SignUpPage />,
  },
  {
    path: '*',
    element: <div>Лох, такой страницы нет!</div>,
  },
]);

root.render(
  <>
    <RouterProvider router={router} />
    <RootModals />
  </>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/styles/styles.scss';
import { RootModals } from './modules/modal/components/RootModals';
import { SignIn } from './pages/auth/SignIn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignUp } from './pages/auth/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/register',
    element: <SignUp />,
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

import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/styles/styles.scss';
import { RootModals } from './modules/modal/components/RootModals';
import { SignIn } from './pages/auth/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <SignIn />
    <RootModals />
  </>
);

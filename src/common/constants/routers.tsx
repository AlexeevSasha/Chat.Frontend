import { paths } from './paths';
import { Navigate } from 'react-router-dom';
import { SignInPage } from '../../pages/SignInPage';
import { SignUpPage } from '../../pages/SignUpPage';
import { MainPage } from '../../pages/MainPage';

export const PrivatePaths = [
  { path: paths.main, element: <MainPage /> },
  { path: paths['404'], element: <Navigate to={'/im'} /> },
];

export const AuthPaths = [
  { path: paths.login, element: <SignInPage /> },
  { path: paths.register, element: <SignUpPage /> },
  { path: paths['404'], element: <Navigate to={'/login'} /> },
];

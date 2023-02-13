import { Navigate } from 'react-router-dom';
import { SignInPage } from '../../pages/SignInPage';
import { SignUpPage } from '../../pages/SignUpPage';
import React from 'react';

export const PrivatePaths = [{ path: '*', element: <Navigate to={'/im'} /> }];

export const AuthPaths = [
  { path: '/login', element: <SignInPage /> },
  { path: '/register', element: <SignUpPage /> },
  { path: '*', element: <Navigate to={'/login'} /> },
];

import { IPositionToast, ITypeToast } from '../interfaces/popup';

interface IPositionProps {
  top?: number | string;
  left?: number | string;
  bottom?: number | string;
  right?: number | string;
  transform?: string;
}

export const getStylesPositionToast: { [key in IPositionToast]: IPositionProps } = {
  'top-left': {
    top: 0,
    left: 0,
  },
  'top-right': {
    top: 0,
    right: 0,
  },
  'top-center': {
    top: 0,
    left: '50%',
    transform: 'translateX( -50%)',
  },
  'bottom-left': {
    bottom: 0,
    left: 0,
  },
  'bottom-right': {
    bottom: 0,
    right: 0,
  },
  'bottom-center': {
    bottom: 0,
    left: '50%',
    transform: 'translateX( -50%)',
  },
};

export const getTypeToast: { [key in ITypeToast]: any } = {
  info: {
    color: '#fff',
    background: '#3498db',
  },
  success: {
    color: '#fff',
    background: '#07bc0c',
  },
  warning: {
    color: '#fff',
    background: '#f1c40f',
  },
  error: {
    color: '#fff',
    background: '#e74c3c',
  },
};

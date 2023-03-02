import { IPositionToast, ITypeToast } from '../interfaces/popup';
import { IconError } from '../../../common/components/Icon/IconError';
import { IconSuccess } from '../../../common/components/Icon/IconSuccess';
import { IconInfo } from '../../../common/components/Icon/IconInfo';
import { IconWarning } from '../../../common/components/Icon/IconWarning';

interface IPositionProps {
  top?: number | string;
  left?: number | string;
  bottom?: number | string;
  right?: number | string;
  transform?: string;
}

interface ITypeProps {
  color: string;
  background: string;
  icon: JSX.Element;
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
export const getTypeToast: { [key in ITypeToast | 'default']: ITypeProps } = {
  info: {
    color: '#fff',
    background: '#3498db',
    icon: <IconInfo />,
  },
  success: {
    color: '#fff',
    background: '#07bc0c',
    icon: <IconSuccess />,
  },
  warning: {
    color: '#fff',
    background: '#f1c40f',
    icon: <IconWarning />,
  },
  error: {
    color: '#fff',
    background: '#e74c3c',
    icon: <IconError />,
  },
  default: {} as ITypeProps,
};

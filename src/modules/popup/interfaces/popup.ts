export interface IModal {
  id?: number;
  renderElement?: JSX.Element;
}

export type ITypeToast = 'info' | 'success' | 'warning' | 'error';

export type IPositionToast =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

export interface IToast {
  text: string;
  position: IPositionToast;
  open?: boolean;
  id?: string;
  type?: ITypeToast;
  timeout?: number;
}

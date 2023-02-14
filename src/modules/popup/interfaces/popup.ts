export interface IModal {
  id?: number;
  open?: boolean;
  renderElement?: JSX.Element;
}

export interface IToast {
  id?: number;
  open?: boolean;
  text?: string;
}

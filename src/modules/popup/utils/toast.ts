import { IToast } from '../interfaces/popup';
import { EventBus } from './eventBus';
import { EventBusNames } from '../interfaces/eventBusNames';

class Toast extends EventBus<IToast> {
  open(details: IToast) {
    this.emit(EventBusNames.POPUP_TOAST, details);
  }
  close(details: IToast) {
    this.emit(EventBusNames.CLOSE_TOAST, details);
  }
}

const toast = new Toast();

export { toast };

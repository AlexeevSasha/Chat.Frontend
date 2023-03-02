import { IToast } from '../interfaces/popup';
import { EventBus } from '../../../common/utils/eventBus';
import { EventBusNames } from '../../../common/interfaces/eventBusNames';

class Toast extends EventBus<IToast> {
  open(details: IToast) {
    this.emit(EventBusNames.OPEN_TOAST, details);
  }
  close(details: Pick<IToast, 'id' | 'position'>) {
    this.emit(EventBusNames.CLOSE_TOAST, details as IToast);
  }
}

const toast = new Toast();

export { toast };

import { IModal } from '../interfaces/popup';
import { EventBus } from './eventBus';
import { EventBusNames } from '../interfaces/eventBusNames';

class Modal extends EventBus<IModal> {
  open(details: IModal) {
    this.emit(EventBusNames.POPUP_MODAL, details);
  }
  close(details: IModal) {
    this.emit(EventBusNames.CLOSE_MODAL, details);
  }
}

const modal = new Modal();

export { modal };

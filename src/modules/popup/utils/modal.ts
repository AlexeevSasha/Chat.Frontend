import { IModal } from '../interfaces/popup';
import { EventBus } from '../../../common/utils/eventBus';
import { EventBusNames } from '../../../common/interfaces/eventBusNames';

class Modal extends EventBus<IModal> {
  open(details: IModal) {
    this.emit(EventBusNames.OPEN_MODAL, details);
  }
  close(details: IModal) {
    this.emit(EventBusNames.CLOSE_MODAL, details);
  }
}

const modal = new Modal();

export { modal };

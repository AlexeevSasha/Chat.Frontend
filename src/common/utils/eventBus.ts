import { EventBusNames } from '../../modules/modal/interfaces/modal';
import { IEventBusDetailsModal, IEventBusDetailsToast } from '../interfaces/eventBusDetails';

class EventBus<T> {
  private eventTarget: EventTarget;

  constructor(comment = '') {
    this.eventTarget = document.appendChild(document.createComment(comment));
  }

  on(type: EventBusNames, listener: (even: CustomEvent<T>) => void) {
    this.eventTarget.addEventListener(type, listener as EventListener);
  }

  once(type: EventBusNames, listener: (even: CustomEvent<T>) => void) {
    this.eventTarget.addEventListener(type, listener as EventListener, { once: true });
  }

  off(type: EventBusNames, listener: (even: CustomEvent<T>) => void) {
    this.eventTarget.removeEventListener(type, listener as EventListener);
  }

  emit(type: EventBusNames, detail?: T) {
    return this.eventTarget.dispatchEvent(new CustomEvent(type, { detail }));
  }
}

const EventBusModal = new EventBus<IEventBusDetailsModal>();
const EventBusToast = new EventBus<IEventBusDetailsToast>();

export { EventBusModal, EventBusToast };

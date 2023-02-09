class EventBus {
  private eventTarget: EventTarget;

  constructor(description = '') {
    this.eventTarget = document.appendChild(document.createComment(description));
  }

  on(type: string, listener: (even: any) => void) {
    this.eventTarget.addEventListener(type, listener as EventListener);
  }

  once(type: string, listener: (even: any) => void) {
    this.eventTarget.addEventListener(type, listener as EventListener, { once: true });
  }

  off(type: string, listener: (even: any) => void) {
    this.eventTarget.removeEventListener(type, listener as EventListener);
  }


  emit(type: string, detail?: any) {
    return this.eventTarget.dispatchEvent(new CustomEvent(type, { detail }));
  }
}

const EventBusInstance = new EventBus();

export { EventBusInstance };
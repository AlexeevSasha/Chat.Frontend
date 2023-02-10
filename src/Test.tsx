import { EventBusModal, EventBusToast } from './common/utils/eventBus';
import { EventBusNames } from './modules/modal/interfaces/modal';

export const Test = () => {
  return (
    <div>
      Тест модалки
      <br />
      <br />
      <button
        onClick={() => {
          EventBusModal.emit(EventBusNames.POPUP_MODAL, {
            open: true,
            renderElement: (
              <div>
                Получается что тут какой-то треш ебанный
                <br />
                <br />
                <br /> <br />
                kj l f
              </div>
            ),
          });
        }}
      >
        Open modal screen
      </button>
      <button
        onClick={() =>
          EventBusToast.emit(EventBusNames.TOAST_MODAL, {
            open: true,
            text: 'Это просто ахуенно' + Math.random().toString(36),
          })
        }
      >
        Open notification
      </button>
    </div>
  );
};

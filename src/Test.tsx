import { EventBusInstance } from './common/utils/EventBus';

export const Test = () => {
  return (
    <div>
      Тест модалки
      <br />
      <br />
      <button
        onClick={() => {
          EventBusInstance.emit('test-modal', {
            isOpen: true,
            render: (
              <div>
                Получается что тут какой-то треш ебанный
                <br />
                <button
                  onClick={() =>
                    EventBusInstance.emit('test-modal', {
                      isOpen: true,
                      render: <div>еббать получилось</div>
                    })
                  }
                >
                  высываю 2 модалку
                </button>
              </div>
            )
          });
        }}
      >
        Open modal screen
      </button>
    </div>
  );
};

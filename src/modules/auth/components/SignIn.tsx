import styles from './auth.module.scss';
import { Form } from '../../forms/components/Form';
import { Link } from 'react-router-dom';
import { paths } from '../../../common/constants/paths';
import { EventBusToast } from '../../popup/utils/eventBus';
import { EventBusNames } from '../../popup/interfaces/eventBusNames';

export const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button
          onClick={() =>
            EventBusToast.emit(EventBusNames.POPUP_TOAST, {
              text: 'lox' + Math.random(),
              position: 'bottom-right',
              type: 'info',
              timeout: 5000,
            })
          }
        >
          open toast
        </button>
        <button
          onClick={() =>
            EventBusToast.emit(EventBusNames.POPUP_TOAST, {
              text: 'lox' + Math.random().toString(36),
              position: 'top-center',
            })
          }
        >
          open toast
        </button>
        <h2>Sign In</h2>
        <Form.SignInForm />
        <div className={styles.link}>
          Don`t have an account yet? <Link to={paths.register}>Sign up</Link>
        </div>
      </div>
    </div>
  );
};

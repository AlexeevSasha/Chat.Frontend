import styles from './auth.module.scss';
import { Form } from '../../modules/forms/components/Form';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Sign Up</h2>
        <Form.SignUpForm />
        <div className={styles.link}>
          Уже есть аккаунт? <Link to={'/login'}>Войти</Link>
        </div>
      </div>
    </div>
  );
};

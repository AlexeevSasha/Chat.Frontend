import styles from '../styles/auth.module.scss';
import { Link } from 'react-router-dom';
import { Form } from '../../forms/components/Form';

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

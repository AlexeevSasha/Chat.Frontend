import styles from './auth.module.scss';
import { Form } from '../../forms/components/Form';
import { Link } from 'react-router-dom';
import { paths } from '../../../common/constants/paths';

export const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Sign In</h2>
        <Form.SignInForm />
        <div className={styles.link}>
          Don`t have an account yet? <Link to={paths.register}>Sign up</Link>
        </div>
      </div>
    </div>
  );
};

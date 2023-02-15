import styles from './auth.module.scss';
import { Link } from 'react-router-dom';
import { Form } from '../../forms/components/Form';
import { paths } from '../../../common/constants/paths';

export const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Sign Up</h2>
        <Form.SignUpForm />
        <div className={styles.link}>
          Got an account? <Link to={paths.login}>Sign in</Link>
        </div>
      </div>
    </div>
  );
};

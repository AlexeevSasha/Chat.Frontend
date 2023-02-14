import styles from './auth.module.scss';
import { Form } from '../../forms/components/Form';

export const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Sign In</h2>
        <Form.SignInForm />
      </div>
    </div>
  );
};

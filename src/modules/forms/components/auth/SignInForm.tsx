import { Input } from '../../../../common/components/inputs/input/Input';
import styles from './sighIn.module.scss';
import { Button } from '../../../../common/components/button/Button';
import { useFormik } from 'formik';

const validate = (values: any) => {
  const errors = {} as any;
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

export const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <Input
        id={'email'}
        name={'email'}
        placeholder={'Email'}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Input
        id={'password'}
        name={'password'}
        placeholder={'Password'}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Button type={'submit'}>Send</Button>
    </form>
  );
};

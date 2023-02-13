import { Input } from '../../../../common/components/inputs/input/Input';
import { Button } from '../../../../common/components/button/Button';
import { useFormik } from 'formik';
import { signInValidation } from '../../validation/signIn.validation';
import styles from '../../styles/auth.form.module.scss';

export const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: signInValidation,
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
        error={formik.errors.email && formik.touched.email ? formik.errors.email : ''}
      />
      <Input
        id={'password'}
        name={'password'}
        placeholder={'Password'}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
      />
      <Button type={'submit'}>Send</Button>
    </form>
  );
};

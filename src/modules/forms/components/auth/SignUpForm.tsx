import { Input } from '../../../../common/components/inputs/input/Input';
import { useFormik } from 'formik';
import { Button } from '../../../../common/components/button/Button';
import { signUpValidation } from '../../validation/signUp.validation';
import styles from './auth.form.module.scss';
import { IAuthSighUp } from '../../../auth/interfaces/auth';

export const SignUpForm = () => {
  const formik = useFormik<IAuthSighUp>({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    validate: signUpValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <Input
        id={'firstname'}
        name={'firstname'}
        placeholder={'Firstname'}
        value={formik.values.firstname}
        onChange={formik.handleChange}
        error={formik.errors.firstname && formik.touched.firstname ? formik.errors.firstname : ''}
      />
      <Input
        id={'lastname'}
        name={'lastname'}
        placeholder={'Lastname'}
        value={formik.values.lastname}
        onChange={formik.handleChange}
        error={formik.errors.lastname && formik.touched.lastname ? formik.errors.lastname : ''}
      />
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
      <Button type={'submit'}>Sing Up</Button>
    </form>
  );
};

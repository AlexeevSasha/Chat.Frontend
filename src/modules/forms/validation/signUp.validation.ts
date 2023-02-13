import { signInValidation } from './signIn.validation';

interface IValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export const signUpValidation = (values: IValues) => {
  const errors = {} as IValues;

  if (!values.lastname) {
    errors.lastname = 'Lastname is required';
  }

  if (!values.firstname) {
    errors.firstname = 'Firstname is required';
  }

  return { ...errors, ...signInValidation({ email: values.email, password: values.password }) };
};

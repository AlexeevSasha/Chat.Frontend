import {
  emailRegex,
  passwordLengthRegex,
  passwordSpecialCharacterRegex,
  passwordUppercaseLetterRegex,
} from './regex.validation';

interface IValues {
  email: string;
  password: string;
}

export const signInValidation = (values: IValues) => {
  const errors = {} as IValues;

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (!passwordLengthRegex.test(values.password)) {
    errors.password = 'Password from 6 to 20 characters';
  } else if (!passwordUppercaseLetterRegex.test(values.password)) {
    errors.password = 'Password must contain one or more uppercase letters';
  } else if (!passwordSpecialCharacterRegex.test(values.password)) {
    errors.password = 'Password must contain at least one character';
  }

  return errors;
};

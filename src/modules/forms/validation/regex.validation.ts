export const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
export const passwordLengthRegex = new RegExp(/^.{6,20}$/);
export const passwordUppercaseLetterRegex = new RegExp(/(?=.*[A-Z])/);
export const passwordSpecialCharacterRegex = new RegExp(/(?=.*[!@#$%^&*])/);

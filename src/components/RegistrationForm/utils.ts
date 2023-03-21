import { PasswordErrorsMap, PasswordValidationRequirement } from "./components";

export const containsUppercase = (str: string) => {
  return /[A-Z]/.test(str);
};

export const containsLowercase = (str: string) => {
  return /[a-z]/.test(str);
};

export const containsNumber = (str: string) => {
  return /[0-9]/.test(str);
};

export const containsSpecialChars = (str: string) => {
  return /[^A-Za-z0-9]/.test(str);
};

export const passwordValidation = (pwd: string): PasswordErrorsMap => {
  const pwdErrorsMap: PasswordErrorsMap = {} as PasswordErrorsMap;

  pwdErrorsMap[PasswordValidationRequirement.CHARS_8] = pwd.length > 8;

  pwdErrorsMap[PasswordValidationRequirement.UPPERCASE_LETTER] =
    containsUppercase(pwd);

  pwdErrorsMap[PasswordValidationRequirement.LOWERCASE_LETTER] =
    containsLowercase(pwd);

  pwdErrorsMap[PasswordValidationRequirement.NUMBER] = containsNumber(pwd);

  pwdErrorsMap[PasswordValidationRequirement.SPECIAL_CHAR] =
    containsSpecialChars(pwd);

  return pwdErrorsMap;
};

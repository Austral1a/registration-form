import { FC, useEffect, useMemo, useState } from "react";
import { passwordValidation } from "../../utils";
import "./PasswordValidationResults.css";

export enum PasswordValidationRequirement {
  CHARS_8 = "8+ characters",
  UPPERCASE_LETTER = "uppercase letter",
  LOWERCASE_LETTER = "lowercase letter",
  NUMBER = "number",
  SPECIAL_CHAR = "special character",
}

export type PasswordErrorsMap = Record<
  `${PasswordValidationRequirement}`,
  boolean
>;

export interface PasswordValidationResultsProps {
  pwdValue: string;
}

export const PasswordValidationResults: FC<PasswordValidationResultsProps> = ({
  pwdValue,
}) => {
  const [pwdErrorsMap, setPwdErrorsMap] = useState<PasswordErrorsMap>({
    [PasswordValidationRequirement.CHARS_8]: false,
    [PasswordValidationRequirement.SPECIAL_CHAR]: false,
    [PasswordValidationRequirement.NUMBER]: false,
    [PasswordValidationRequirement.LOWERCASE_LETTER]: false,
    [PasswordValidationRequirement.UPPERCASE_LETTER]: false,
  });

  useEffect(() => {
    setPwdErrorsMap(passwordValidation(pwdValue));
  }, [pwdValue]);

  const requirementSatisfiedEl = useMemo(() => {
    return <span className="requirement-satisfied">✔︎</span>;
  }, []);

  const requirementNotSatisfiedEl = useMemo(() => {
    return <span className="requirement-not-satisfied">✘</span>;
  }, []);

  return (
    <div className="form-content__validation-results">
      {Object.entries(pwdErrorsMap).map(([requirement, isSatisfied]) => {
        return (
          <p key={requirement}>
            {isSatisfied ? requirementSatisfiedEl : requirementNotSatisfiedEl}{" "}
            {requirement}
          </p>
        );
      })}
    </div>
  );
};

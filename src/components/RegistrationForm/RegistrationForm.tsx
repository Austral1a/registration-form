import { FC, useState } from "react";
import {
  EmailField,
  SubmitButton,
  PasswordField,
  PasswordValidationResults,
} from "./components";
import "./RegistrationForm.css";

export const RegistrationForm: FC = () => {
  const [emailValue, setEmailValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");

  return (
    <form className={"form"} action="#">
      <div className={"form-content"}>
        <EmailField
          value={emailValue}
          handleChange={(e) => setEmailValue(e.target.value)}
        />
        <PasswordField value={pwdValue} setPwdValue={setPwdValue} />

        <PasswordValidationResults pwdValue={pwdValue} />
        <SubmitButton />
      </div>
    </form>
  );
};

import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import "./PasswordField.css";

const MASK = "*";

export interface PasswordFieldProps {
  value: string;
  setPwdValue: Dispatch<SetStateAction<string>>;
  mask?: string;
}

export const PasswordField: FC<PasswordFieldProps> = ({
  setPwdValue,
  value,
  mask = MASK,
}) => {
  let updatePwd = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!e) {
      return;
    }

    let newValue = e.target.value;
    let newLength = newValue.length / mask.length;
    let oldLength = value.length * mask.length;

    // We've added characters at the end
    if (value.length < newLength)
      setPwdValue(value + newValue.slice(oldLength));

    // We've removed characters from the end
    if (value.length > newLength) setPwdValue(value.slice(0, newLength));
  };

  return (
    <div className="password-field-wrapper">
      <label htmlFor="password">Password</label>
      <input
        id="password"
        onChange={updatePwd}
        name="password"
        value={mask.repeat(value.length)}
        className="password-field"
      />
    </div>
  );
};

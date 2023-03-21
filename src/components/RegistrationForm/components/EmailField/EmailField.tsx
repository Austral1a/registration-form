import { ChangeEventHandler, FC } from "react";
import "./EmailField.css";

export interface EmailFieldProps {
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

export const EmailField: FC<EmailFieldProps> = ({ handleChange, value }) => {
  return (
    <div className="email-field-wrapper">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        onChange={handleChange}
        name="email"
        value={value}
        className={"email-field"}
      />
    </div>
  );
};

import { ReactNode } from "react";

type InputTypes =
  | "text"
  | "number"
  | "email"
  | "phone"
  | "password"
  | "date"
  | "area"
  | "file"
  | "time";

export interface InputProps {
  type: InputTypes;
  value: string;
  title?: string;
  name: string;
  placeholder?: string;
  className?: string;
  icon?: ReactNode;
}

import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";

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
  setState: Dispatch<SetStateAction<string>>;
}

export interface CartProps {
  category?: string;
  description?: string;
  id?: 1;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface MyButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
  primary?: boolean;
  icon?: ReactNode;
}

import { AnchorHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string | ReactNode;
  href: string;
  left?: boolean;
  right?: boolean;
  cart?: boolean;
}

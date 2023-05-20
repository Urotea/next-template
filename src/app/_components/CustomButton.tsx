import clsx from "clsx";

type ButtonTypes =
  | "normal"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "link";

type ButtonSizes = "xs" | "sm" | "md" | "lg";

type Props = {
  type?: ButtonTypes;
  outline?: boolean;
  size?: ButtonSizes;
  children?: React.ReactNode;
};

const buttonTypesName: { [key in ButtonTypes]: string } = {
  normal: "",
  primary: "btn-primary",
  secondary: "btn-secondary",
  success: "btn-success",
  error: "btn-error",
  warning: "btn-warning",
  info: "btn-info",
  link: "btn-link",
};

const buttonSizesName: { [key in ButtonSizes]: string } = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

const CustomButton: React.FC<Props> = ({
  type = "normal",
  outline = false,
  size = "md",
  children,
}) => {
  const cx = clsx(
    "btn",
    "shadow-md",
    { outline },
    buttonTypesName[type],
    buttonSizesName[size]
  );
  return <button className={cx}>{children}</button>;
};

export default CustomButton;

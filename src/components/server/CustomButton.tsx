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

type Props = {
  type?: ButtonTypes;
  outline?: boolean;
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

const CustomButton: React.FC<Props> = ({
  type = "normal",
  outline = false,
  children,
}) => {
  const cx = clsx("btn", "shadow-md", { outline }, buttonTypesName[type]);
  return <button className={cx}>{children}</button>;
};

export default CustomButton;

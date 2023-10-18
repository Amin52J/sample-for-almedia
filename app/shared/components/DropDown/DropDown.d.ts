export interface DropDownBodyProps {
  body: React.ReactElement | string;
  header?: React.ReactElement | string;
  onClose?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export interface DropDownProps extends DropDownBodyProps {
  openButton: React.ReactElement;
  position?: "middle" | "right" | "left";
  isDisabled?: boolean;
}

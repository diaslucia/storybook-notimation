import "./styles.css";
import IconButton from "./IconButton";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  styleName?: string;
  isDisabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  onclick?: () => void;
  iconLeft?: string | null;
  iconRight?: string | null;
  svgColor?: string | null;
}

const Button: React.FC<Props> = ({
  title,
  onclick,
  isDisabled = false,
  type = "button",
  iconLeft = null,
  iconRight = null,
}: Props) => {
  return (
    <button className="btn" onClick={onclick} disabled={isDisabled} type={type}>
      {iconLeft && <IconButton icon={iconLeft} />}
      {title}
      {iconRight && <IconButton icon={iconRight} />}
    </button>
  );
};

export default Button;

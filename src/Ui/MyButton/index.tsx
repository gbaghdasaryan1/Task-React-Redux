import classes from "./MyButton.module.scss";
import { MyButtonProps } from "./MyButton.props";
import cn from "classnames";
const MyButton = ({ icon, title, className, primary, ...props }: MyButtonProps) => {
  return (
    <button
      className={cn(classes.MyButton, className, {
        [classes.primary]: primary,
        [classes.outline]: !primary,
      })}
      {...props}
    >
      {icon}
      {title}
    </button>
  );
};

export default MyButton;

import { ButtonProps } from "../types";
import styles from "./Button.module.css";
function Button({ children, onclick, type }: ButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;

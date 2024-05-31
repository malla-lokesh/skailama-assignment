import { forwardRef } from "react";
import styles from "../styles/Dialog.module.css";

const Dialog = forwardRef((props, ref) => {
  return <dialog ref={ref}>{props.children}</dialog>;
});

export default Dialog;

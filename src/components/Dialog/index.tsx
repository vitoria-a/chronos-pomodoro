import { ToastContentProps } from "react-toastify";
import { Button } from "../Button";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

import styles from "./styles.module.css";

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>

        <div className={styles.buttonsContainer}>
          <Button
            onClick={() => closeToast(true)}
            icon={<ThumbsUpIcon />}
            aria-label="Confirm action and close"
            title="Confirm action and close"
          />
          <Button
            onClick={() => closeToast(false)}
            icon={<ThumbsDownIcon />}
            color="red"
            aria-label="Cancel action and close"
            title="Cancel action and close"
          />
        </div>
      </div>
    </>
  );
}

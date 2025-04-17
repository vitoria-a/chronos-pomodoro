import styles from "./styles.module.css";

type ButtonProps = {
  color?: "green" | "red";
  icon: React.ReactNode;
} & React.ComponentProps<"button">;

export function Button({ color = "green", icon, ...rest }: ButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...rest}>
        {icon}
      </button>
    </>
  );
}

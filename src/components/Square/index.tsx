import styles from "./Square.module.css";

type Props = {
  children: React.ReactNode;
  width: string;
  height: string;
};

export default function Square({ children, width, height }: Props) {
  return (
    <div className={styles.container} style={{ width, height }}>
      {children}
    </div>
  );
}

import styles from "./Square.module.css";

type Props = {
  children: React.ReactNode;
  width: string;
  height: string;
  background: string;
};

export default function Square({ children, width, height, background }: Props) {
  return (
    <div className={styles.container} style={{ width, height, background }}>
      {children}
    </div>
  );
}

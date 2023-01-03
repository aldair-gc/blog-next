import styles from "./line.module.css";

type Props = {
  children: React.ReactNode;
  width: string;
  height: string;
};

export default function Item({ children, width, height }: Props) {
  return (
    <div className={styles.item} style={{ width, height }}>
      {children}
    </div>
  );
}

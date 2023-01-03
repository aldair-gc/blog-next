import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  width: string;
  height: string;
  top: string;
  left: string;
};

export default function Bar({ children, width, height, top, left }: Props) {
  return (
    <div className={styles.container} style={{ width, height, top, left }}>
      {children}
    </div>
  );
}

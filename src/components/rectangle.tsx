import styles from "../styles/Rectangle.module.css";

type Props = {
  children: React.ReactNode;
  width: string;
  height: string;
  transform: string;
};

export default function Rectangle({ children, width, height, transform }: Props) {
  return (
    <div className={styles.container} style={{ width, height, transform }}>
      {children}
    </div>
  );
}

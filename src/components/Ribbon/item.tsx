import styles from "./ribbon.module.css";

type Props = {
  children: React.ReactNode;
  width: string;
  height: string;
  transform: string;
  radius: string;
  backfaceVisibility: "hidden" | "visible";
};

export default function Item({ children, width, height, transform, radius, backfaceVisibility }: Props) {
  return (
    <div
      className={styles.item}
      style={{ width, height, transform, transformOrigin: `0 0 ${radius}`, backfaceVisibility }}
    >
      {children}
    </div>
  );
}

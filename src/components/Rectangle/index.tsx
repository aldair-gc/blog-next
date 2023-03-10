import styles from "./Rectangle.module.css";

type Props = {
  children: React.ReactNode;
  width: string;
  height: string;
  transform: string;
  radius: string;
  backfaceVisibility: "hidden" | "visible";
  transition: string;
};

export default function Rectangle({
  children,
  width,
  height,
  transform,
  radius,
  backfaceVisibility,
  transition,
}: Props) {
  return (
    <div
      className={styles.container}
      style={{ width, height, transform, transformOrigin: `0 0 ${radius}`, backfaceVisibility, transition }}
    >
      {children}
    </div>
  );
}

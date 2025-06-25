// src/components/InfoCard.tsx
import styles from './InfoCard.module.css';

type Props = {
  title: string;
  content: string;
};

export default function InfoCard({ title, content }: Props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
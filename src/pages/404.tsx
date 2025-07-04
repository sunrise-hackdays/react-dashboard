// src/pages/404.tsx
import Link from 'next/link';
import styles from '../styles/NotFound.module.css';

export default function Custom404() {
  return (
    <main className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404 - ページが見つかりませんでした</h1>
      <p className={styles.notFoundText}>
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <Link href="/">
        <p className={styles.backToHome}>ホームに戻る</p>
      </Link>
    </main>
  );
}

// src/pages/404.tsx
import Link from 'next/link';

export default function Custom404() {
  return (
    <main style={{ textAlign: 'center', padding: '5rem' }}>
      <h1 style={{ fontSize: '2rem' , color: '#222',}}>404 - ページが見つかりませんでした</h1>
      <p style={{ marginTop: '1rem' , color: '#222',}}>
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <Link href="/">
        <p style={{ marginTop: '2rem', color: '#0070f3', cursor: 'pointer' }}>
          ホームに戻る
        </p>
      </Link>
    </main>
  );
}

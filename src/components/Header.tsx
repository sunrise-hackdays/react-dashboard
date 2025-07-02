// Header.tsx
import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  subtitle?: string;
  unreadCount?: number;
};

export default function Header({ title, subtitle, unreadCount }: Props) {
  return (
    <header className={styles.header}>
      {/* ロゴ＋テキストを横並びに */}
      <div className={styles.logoContainer}>
        <Image
          src="/images/header.png"
          alt="Site Logo"
          width={80}
          height={80}
          style={{ objectFit: 'contain' }}
        />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        {unreadCount !== undefined && unreadCount > 0 && (
        <div className={styles.badge}>
          🔔 {unreadCount}
        </div>
      )}
      </div>
      <nav className={styles.nav}>
        <Link href="/">🏠 ホーム</Link>
        <Link href="/hoge">📄 Hoge</Link>
        <Link href="/works">📁実績一覧</Link>
        <Link href="/contact">📨 お問い合わせ</Link>
      </nav>
    </header>
  );
}

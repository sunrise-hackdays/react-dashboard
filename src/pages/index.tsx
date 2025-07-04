// dashboard.tsx
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import GraphTile from '../components/GraphTile';
import InfoCard from '../components/InfoCard';
import NotificationCard from '../components/NotificationCard';
import styles from '../styles/Dashboard.module.css';

type Notification = {
  title: string;
  content: string;
  isRead: boolean;
  date: string;
};

// 仮データ
const mockNotifications = [
  {
    title: 'お知らせ：サーバ再起動',
    content: '明日午前2時に再起動があります。',
    isRead: false,
    date: '2025-06-20T09:00:00Z',
  },
  {
    title: '新着：チャットメッセージ',
    content: '営業部からの問い合わせがあります。',
    isRead: false,
    date: '2025-06-21T02:30:00Z',
  },
];

export default function DashboardPage() {
    const stats = [
        { label: 'First Response\nWithin SLA',     value: 80, color: '#4caf50' },
        { label: 'Resolution\nWithin SLA',         value: 70, color: '#ffb300' },
        { label: 'First Contact\nResolution',      value: 40, color: '#f44336' },
    ];
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
    const handleClick = (index: number) => {
        const newList = [...notifications];
        newList[index].isRead = true;
        setSelectedNotification(newList[index]);

        // ✅ 未読→既読、新しい順でソート
        const sorted = [...newList].sort((a, b) => {
            if (a.isRead !== b.isRead) {
            return Number(a.isRead) - Number(b.isRead); // 未読→既読
            }
            return new Date(b.date).getTime() - new Date(a.date).getTime(); // 新しい順
        });
        setNotifications(sorted);
    };
    const unreadCount = notifications.filter(n => !n.isRead).length;

    useEffect(() => {
    setTimeout(() => {
        const sorted = [...mockNotifications].sort((a, b) => {
        if (a.isRead !== b.isRead) {
            return Number(a.isRead) - Number(b.isRead);
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        setNotifications(sorted);
    }, 1000);
    }, []);

    return (
        <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <Header title="ダッシュボード" subtitle="Reactポートフォリオ" unreadCount={unreadCount} />

        <div className={styles.tileContainer}>
        <GraphTile stats={stats} />
        <InfoCard
            title="最近のアクティビティ"
            content="タスク3件完了・SLA 98%達成！"
        />
        </div>
        <div className={styles.section}>
        <h2 className={styles.sectionTitle}>通知一覧</h2>
        {notifications.map((n, i) => (
        <NotificationCard
            key={i}
            title={n.title}
            content={n.content}
            isRead={n.isRead}
            isSelected={selectedNotification?.title === n.title}
            onClick={() => handleClick(i)}
            date={n.date}
        />
        ))}

        {selectedNotification && (
        <div className={styles.detailBox}>
            <div className={styles.detailHeader}>
            <h3 style={{ margin: 0 }}>📌 詳細</h3>
            <button
                onClick={() => setSelectedNotification(null)}
                className={styles.closeButton}
                aria-label="閉じる"
            >
                ✕
            </button>
            </div>
            <p className={styles.detailTitle}>{selectedNotification.title}</p>
            <p>{selectedNotification.content}</p>
        </div>
        )}
      </div>
</main>

    );
}

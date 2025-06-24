import { formatDate } from '../utils/utils';

type Props = {
  title: string;
  content: string;
  isRead: boolean;
  isSelected: boolean;
  onClick: () => void;
  date: string;
};

export default function NotificationCard({
  title,
  content,
  isRead,
  isSelected,
  onClick,
  date
}: Props) {
  return (
    <div
      onClick={onClick}
      style={{
        border: isSelected ? '2px solid #007bff' : '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem',
        cursor: 'pointer',
        backgroundColor: isRead ? '#f8f8f8' : '#e0f7fa',
      }}
    >
      <p style={{ fontWeight: isRead ? 'normal' : 'bold', margin: 0, color: isRead ? '#555' : '#000'}}>{title}</p>
      <p style={{ color: '#555', margin: '0.5rem 0 0 0' }}>{content}</p>
      <p style={{
        fontSize: '0.9rem',
        color: '#666',
        margin: '0.3rem 0'
        }}>
        🕒 {formatDate(date)}
        </p>
    </div>
  );
}

// src/AchievementCard.tsx
// 実績を表示する「パーツ」の設計図です

interface Props {
  title: string;
  badge: string;
  description: string;
}

const AchievementCard = ({ title, badge, description }: Props) => {
  return (
    <div style={{
      background: '#fff',
      padding: '25px',
      borderRadius: '12px',
      marginBottom: '20px',
      border: '1px solid #eee',
      boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
    }}>
      <span style={{
        background: '#f39c12',
        color: '#fff',
        padding: '4px 12px',
        borderRadius: '4px',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        display: 'inline-block',
        marginBottom: '10px'
      }}>{badge}</span>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>{title}</h3>
      <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>{description}</p>
    </div>
  );
};

export default AchievementCard;
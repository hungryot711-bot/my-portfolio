interface Props {
  title: string;
  badge: string;
  description: string;
}

const AchievementCard = ({ title, badge, description }: Props) => (
  <div style={{
    background: '#fff',
    padding: '25px',
    borderRadius: '12px',
    marginBottom: '20px',
    border: '1px solid #eee',
    boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
    borderLeft: '5px solid #f39c12'
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
    <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#1a2a6c' }}>{title}</h3>
    <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>{description}</p>
  </div>
);

export default AchievementCard;
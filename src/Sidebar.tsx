interface Props {
  activeMenu: string;
  onMenuClick: (menu: string) => void;
}

const Sidebar = ({ activeMenu, onMenuClick }: Props) => {
  const menus = [
    { id: 'vision', label: '自己プロデュース', icon: '💡' },
    { id: 'achievements', label: '実績（学会・メディア）', icon: '🏆' },
    { id: 'projects', label: '開発実績（アプリ群）', icon: '💻' },
    { id: 'profile', label: '基本経歴・資格', icon: '🆔' },
  ];

  return (
    <aside style={{ 
      width: '320px', 
      backgroundColor: '#e9e4d4', // サンドベージュ
      borderRight: '1px solid #dcd7c9',
      color: '#4a4a4a', 
      padding: '40px 20px', 
      minHeight: '100vh' 
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        {/* プロフィール画像 */}
        <img 
          src="/my-profile.jpg" 
          alt="丹生谷 拳志郎"
          style={{ 
            width: '100px', 
            height: '100px', 
            borderRadius: '50%', 
            objectFit: 'cover', 
            margin: '0 auto 15px', 
            display: 'block',
            border: '3px solid #dcd7c9' 
          }} 
        />
        
        <div style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '5px', color: '#2c3e50' }}>
          丹生谷 拳志郎
        </div>
        <div style={{ fontSize: '0.75rem', textAlign: 'center', color: '#7f8c8d' }}>
          作業療法士 × 教育DXエンジニア
        </div>
      </div> {/* ← ここが抜けていた閉じタグです */}
      
      <nav style={{ width: '100%' }}>
        {menus.map((menu) => (
          <button 
            key={menu.id} 
            onClick={() => onMenuClick(menu.id)} 
            style={{ 
              width: '100%', 
              padding: '14px 20px', 
              marginBottom: '8px', 
              background: activeMenu === menu.id ? '#a3b18a' : 'transparent', // セージグリーン（選択時）
              color: activeMenu === menu.id ? '#fff' : '#4a4a4a', 
              border: 'none', 
              borderRadius: '8px', 
              textAlign: 'left', 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              fontWeight: activeMenu === menu.id ? 'bold' : 'normal', 
              transition: '0.3s' 
            }}
          >
            <span>{menu.icon}</span> {menu.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
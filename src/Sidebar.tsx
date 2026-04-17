interface Props {
  activeMenu: string;
  onMenuClick: (menu: string) => void;
}

const Sidebar = ({ activeMenu, onMenuClick }: Props) => {
  const menus = [
    { id: 'vision', label: '自己プロデュース' },
    { id: 'achievements', label: '実績' },
    { id: 'projects', label: '開発実績' },
    { id: 'profile', label: '経歴・資格' },
  ];

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img 
          src={`${import.meta.env.BASE_URL}my-profile.jpg`}
          alt="丹生谷 拳志郎"
          className="profile-img"
        />
        <div className="profile-info">
          <div className="name">丹生谷 拳志郎</div>
          <div className="title">作業療法士 × 教育DXエンジニア</div>
        </div>
      </div>
      
      <nav className="nav-menu">
        {menus.map((menu) => (
          <button 
            key={menu.id} 
            onClick={() => onMenuClick(menu.id)} 
            className={`nav-button ${activeMenu === menu.id ? 'active' : ''}`}
          >
            <span className="label">{menu.label}</span>
          </button>
        ))}
      </nav>

      <style>{`
        .sidebar {
          width: 320px;
          background-color: #e9e4d4;
          border-right: 1px solid #dcd7c9;
          padding: 40px 20px;
          flex-shrink: 0;
        }
        .profile-section { text-align: center; margin-bottom: 30px; }
        .profile-img {
          width: 100px; height: 100px; border-radius: 50%;
          object-fit: cover; margin: 0 auto 15px; display: block;
          border: 3px solid #dcd7c9;
        }
        .name { font-size: 1.2rem; font-weight: bold; color: #2c3e50; }
        .title { font-size: 0.75rem; color: #7f8c8d; margin-top: 5px; }

        .nav-menu {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .nav-button {
          width: 100%; 
          padding: 14px 15px;
          background: #fff; /* 通常時は白背景 */
          border: 2px solid #dcd7c9; /* 全てのボタンに枠線 */
          border-radius: 8px;
          text-align: center; 
          cursor: pointer;
          font-size: 0.95rem; 
          transition: 0.3s; 
          color: #4a4a4a;
          font-weight: bold;
        }

        /* 選択されているボタンのスタイル */
        .nav-button.active { 
          background: #a3b18a; 
          border-color: #a3b18a;
          color: #fff; 
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
            padding: 20px 15px;
            border-right: none;
            border-bottom: 1px solid #dcd7c9;
            box-sizing: border-box;
          }
          .profile-section {
            display: flex; 
            align-items: center; 
            text-align: left; 
            margin-bottom: 20px;
          }
          .profile-img { width: 50px; height: 50px; margin: 0 15px 0 0; }
          .nav-menu {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          .nav-button { 
            padding: 12px 5px; 
            font-size: 0.85rem; 
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
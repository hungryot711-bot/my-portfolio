import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Vision, Achievements, Projects, Profile } from './components/Sections';

const App = () => {
  const [activeMenu, setActiveMenu] = useState('vision');

  return (
    <div className="app-container">
      <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />
      
      <main className="main-content">
        <div className="content-wrapper">
          {activeMenu === 'vision' && <Vision />}
          {activeMenu === 'achievements' && <Achievements />}
          {activeMenu === 'projects' && <Projects />}
          {activeMenu === 'profile' && <Profile />}
        </div>
      </main>

      <style>{`
        .app-container {
          display: flex;
          min-height: 100vh;
          background-color: #f4f1ea;
        }

        .main-content {
          flex: 1;
          padding: 40px 20px;
          overflow-y: auto;
        }

        .content-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        /* スマホ対応：画面幅 768px 以下の時 */
        @media (max-width: 768px) {
          .app-container {
            flex-direction: column; /* 横並びから縦並びに */
          }
          .main-content {
            padding: 20px 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
import { useState } from 'react'
import Sidebar from './Sidebar'
import { Vision, Achievements, Projects, Profile } from './components/Sections'

function App() {
  const [activeMenu, setActiveMenu] = useState('vision');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />
      <main style={{ flex: 1, padding: '50px', maxWidth: '900px', textAlign: 'left' }}>
        <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
          {activeMenu === 'vision' && <Vision />}
          {activeMenu === 'achievements' && <Achievements />}
          {activeMenu === 'projects' && <Projects />}
          {activeMenu === 'profile' && <Profile />}
        </div>
      </main>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

export default App
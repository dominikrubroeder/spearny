import './Sidebar.scss';
import { useState } from 'react';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((previousState) => !previousState);
  };

  return (
    <div className={`sidebar h-grid ${showSidebar ? 'sidebar--open' : ''}`}>
      <header className="v-grid-space-between">
        <div
          className={`sidebar__toggle sidebar__toggle--${showSidebar}`}
          onClick={toggleSidebar}
        >
          <div className="sidebar__toggle-bar">
            <span></span>
          </div>
          <div className="sidebar__toggle-bar">
            <span></span>
          </div>
          <div className="sidebar__toggle-bar">
            <span></span>
          </div>
        </div>
      </header>
      <div className="sidebar__content">
        {showSidebar && <div>Sidebar content</div>}
      </div>
      <footer>Sidebar footer</footer>
    </div>
  );
};

export default Sidebar;

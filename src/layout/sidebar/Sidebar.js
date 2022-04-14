import './Sidebar.scss';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = useCallback(() => {
    document.body.classList.toggle('with--sidebar');
    setShowSidebar((previousState) => !previousState);
  }, [showSidebar, setShowSidebar]);

  return (
    <div className={`sidebar h-grid ${showSidebar ? 'sidebar--open' : ''}`}>
      <header className="v-grid-space-between">
        <FontAwesomeIcon
          icon="fa-solid fa-circle-chevron-right"
          onClick={toggleSidebar}
          className={`sidebar__toggle ${
            showSidebar ? 'sidebar__toggle--mirrored' : ''
          }`}
        />
      </header>
      <div
        className="sidebar__content"
        onClick={() => toggleSidebar('content')}
      >
        {showSidebar && <div>Sidebar content</div>}
      </div>
      <footer>{showSidebar && <span>Footer content</span>}</footer>
    </div>
  );
};

export default Sidebar;

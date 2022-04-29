import './Sidebar.scss';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TheFooter from '../footer/TheFooter';
import Tags from '../../components/tags/Tags';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = useCallback(() => {
    document.body.classList.toggle('with--sidebar');
    setShowSidebar((previousState) => !previousState);
  }, [setShowSidebar]);

  return (
    <div className={`sidebar h-grid ${showSidebar ? '' : 'sidebar--closed'}`}>
      <header className="v-grid space-between">
        <FontAwesomeIcon
          icon="fa-solid fa-circle-chevron-right"
          onClick={toggleSidebar}
          className={`sidebar__toggle ${
            showSidebar ? 'sidebar__toggle--mirrored' : ''
          }`}
        />
      </header>
      <div className={`sidebar__content ${showSidebar ? 'visible' : ''}`}>
        <div className="h-grid">
          <Tags />
        </div>
      </div>
      <TheFooter
        className={`sidebar__footer ${showSidebar ? 'visible' : ''}`}
      />
    </div>
  );
};

export default Sidebar;

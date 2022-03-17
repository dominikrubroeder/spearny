import { Fragment } from 'react';
import './font/font.scss';
import './App.scss';
import TheHeader from './ui/header/TheHeader';
import Movements from './components/movements/Movements';
import Tags from './components/tags/Tags';

function App() {
  return (
    <Fragment>
      <TheHeader />
      <main className="main-content h-grid">
        <Movements />
        <Tags />
      </main>
    </Fragment>
  );
}

export default App;

import { Fragment } from 'react';
import './App.scss';
import TheHeader from './ui/header/TheHeader';
import Movements from './components/movements/Movements';

function App() {
  return (
    <Fragment>
      <TheHeader />
      <main>
        <Movements />
      </main>
    </Fragment>
  );
}

export default App;

import './App.scss';
import TheHeader from './ui/header/TheHeader';
import Movements from './components/movements/Movements';

function App() {
  return (
    <div>
      <TheHeader />
      <main>
        <Movements />
      </main>
    </div>
  );
}

export default App;

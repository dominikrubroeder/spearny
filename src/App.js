import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './font/font.scss';
import './App.scss';
import TheHeader from './ui/header/TheHeader';
import Authentication from './pages/Authentication';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Fragment>
      <TheHeader />
      <main className="main-content h-grid">
        <Route path="/" exact>
          <Redirect to="/authentication" />
        </Route>
        <Route path="/authentication">
          <Authentication />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </main>
    </Fragment>
  );
}

export default App;

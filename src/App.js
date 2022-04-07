import React, { Fragment, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './font/font.scss';
import './App.scss';

import TheHeader from './ui/header/TheHeader';

const Authentication = React.lazy(() => import('./pages/Authentication'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Fragment>
      <TheHeader />
      <main className="main-content h-grid">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={<Navigate replace to="/authentication" />}
            />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </main>
    </Fragment>
  );
}

export default App;

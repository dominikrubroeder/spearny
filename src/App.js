import React, { Fragment, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMagicWandSparkles,
  faUpRightAndDownLeftFromCenter,
  faLink,
  faRotate,
  faCalendarDays,
  faTags,
  faPenClip,
  faPaperPlane,
  faFilter,
  faHand,
} from '@fortawesome/free-solid-svg-icons';

import './font/font.scss';
import './App.scss';

import TheHeader from './layout/header/TheHeader';
import TheFooter from './layout/footer/TheFooter';

const Landingpage = React.lazy(() => import('./pages/Landingpage'));
const Authentication = React.lazy(() => import('./pages/Authentication'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

function App() {
  library.add(
    faMagicWandSparkles,
    faUpRightAndDownLeftFromCenter,
    faLink,
    faRotate,
    faCalendarDays,
    faTags,
    faPenClip,
    faPaperPlane,
    faFilter,
    faHand
  );

  return (
    <Fragment>
      <TheHeader />
      <main className="main-content h-grid">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </main>
      <TheFooter />
    </Fragment>
  );
}

export default App;

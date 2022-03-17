import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import TagsProvider from './store/TagsProvider';

ReactDOM.render(
  <TagsProvider>
    <App />
  </TagsProvider>,
  document.getElementById('root')
);

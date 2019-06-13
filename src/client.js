import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import { Context as ResponsiveContext } from 'react-responsive';
import './client.css';
import routes from './routes';

ensureReady(routes).then(data =>
  hydrate(
    <ResponsiveContext.Provider value={{ width: 600 }}>
      <BrowserRouter>
          <After data={data} routes={routes} />
      </BrowserRouter>
    </ResponsiveContext.Provider>,
    document.getElementById('root')
  )
);

if (module.hot) {
  module.hot.accept();
}

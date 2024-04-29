import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { ProductsProvider } from './components/context';

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


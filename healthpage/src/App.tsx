import React from 'react';
import './styles/global.css';

import Routes from './routes'
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div>
        <Header />
        <Routes />
        </div>
      </BrowserRouter>
  );
}

export default App;
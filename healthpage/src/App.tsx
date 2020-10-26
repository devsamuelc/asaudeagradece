import React from 'react';
import './styles/global.css';

import Routes from './routes'
import Header from './components/header';
import Footer from './components/footer'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div>
        <Header />
        <Routes />
        <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
import React, { FC } from 'react';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

const App: FC = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;

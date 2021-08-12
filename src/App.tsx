import React, { FC } from 'react';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TestJson from './components/Test/TestJson';
import Main from './components/Main/Main';

// MaterialUi

const App: FC = () => (
  <div>
    <Header />
    <TestJson />
    <Main />
    <Footer />
  </div>
);

export default App;

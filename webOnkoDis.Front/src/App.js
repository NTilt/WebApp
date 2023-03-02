import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import React from "react";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './index.css';
import { FullPageWrapper } from './FullPageWrapper';

const App = () => {
  return <>
    <BrowserRouter>
      <Header />
      <FullPageWrapper/>
      <Footer />
    </BrowserRouter>
  </>
};

export default App;
import React from 'react';
import Header from './component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <div  className='p-5 my-5 mx-14'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
import React from 'react';

import Navbar from '../navbar/navbar';
import Header from '../header/header';
import Container from '../container/container';
import Footer from '../footer/footer';

const main = () => {
  return (
    <div className='main'>
      <Navbar />
      <hr />
      <Header />
      <hr />
      <Container />
      <hr />
      <Footer />
      <hr />
    </div>
  )
};

export default main;
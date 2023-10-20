import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name='description' content='The home page desc' />
        <link rel='canonical' href='/' />
      </Helmet>
      HomePage
    </div>
  );
};

export default HomePage;

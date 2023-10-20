import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About Page</title>
        <meta
          name='description'
          content='A little about Lucas Rodrigues Slepetys'
        />
        <link rel='canonical' href='/about' />
      </Helmet>
      AboutPage
    </div>
  );
};

export default AboutPage;

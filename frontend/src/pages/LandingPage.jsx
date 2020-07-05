import React from 'react';
import MainFeatures from '../components/MainFeatures/MainFeatures';
import ImageComposition from '../components/ImageComposition/ImageComposition';
import Register from '../components/Register/Register';

const LandingPage = () => {
  return (
    <>
      <Register />
      <ImageComposition />
      <MainFeatures />
    </>
  );
};

export default LandingPage;

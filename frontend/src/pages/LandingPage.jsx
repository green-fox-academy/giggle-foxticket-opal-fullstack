import React from 'react';
import MainFeatures from '../components/MainFeatures/MainFeatures';
import ImageComposition from '../components/ImageComposition/ImageComposition';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const LandingPage = () => {
  return (
    <>
      <RegisterForm />
      <ImageComposition />
      <MainFeatures />
    </>
  );
};

export default LandingPage;

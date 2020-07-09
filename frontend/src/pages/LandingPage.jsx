import React from 'react';
import MainFeatures from '../components/MainFeatures/MainFeatures';
import ImageComposition from '../components/ImageComposition/ImageComposition';
import Footer from '../components/Footer/Footer';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

const LandingPage = () => {
  return (
    <>
      <ImageComposition />
      <MainFeatures />
      <VideoPlayer />
      <Footer/>
    </>
  );
};

export default LandingPage;

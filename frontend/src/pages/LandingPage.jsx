import React from 'react';
import MainFeatures from '../components/MainFeatures/MainFeatures';
import ImageComposition from '../components/ImageComposition/ImageComposition';
import Footer from '../components/Footer/Footer';
import VideoPlayer from '../components/VideoPlayer/Videoplayer';

const LandingPage = () => {
  return (
    <>
      <ImageComposition />
      <MainFeatures />
      <VideoPlayer/>
      <Footer/>
    </>
  );
};

export default LandingPage;

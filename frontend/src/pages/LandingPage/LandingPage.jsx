import React from 'react';
import { useHistory } from 'react-router';
import MainFeatures from '../../components/MainFeatures/MainFeatures';
import ImageComposition from '../../components/ImageComposition/ImageComposition';
import Footer from '../../components/Footer/Footer';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Button from '../../components/Button/Button';
import './LandingPage.styles.sass';

const LandingPage = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = '/shop';
    history.push(path);
  };

  return (
    <>
      <ImageComposition />
      <MainFeatures />
      <Button buttonStyle="btn--danger--solid" onClick={routeChange}>
        Buy Tickets
      </Button>
      <VideoPlayer />
      <Footer />
    </>
  );
};

export default LandingPage;

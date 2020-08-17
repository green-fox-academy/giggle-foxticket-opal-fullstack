import React from 'react';
import { Link } from 'react-router-dom';
import MainFeatures from '../../components/MainFeatures/MainFeatures';
import ImageComposition from '../../components/ImageComposition/ImageComposition';
import Footer from '../../components/Footer/Footer';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Button from '../../components/Button/Button';
import './LandingPage.styles.sass';
import SubscribeMail from '../../components/SubscribeMail/SubscribeMail';

const LandingPage = () => {
  return (
    <>
      <ImageComposition />
      <MainFeatures />
      <Link to="/shop">
        <Button buttonStyle="btn--danger--solid">Buy Tickets</Button>
      </Link>
      <VideoPlayer />
      <SubscribeMail />
      <Footer />
    </>
  );
};

export default LandingPage;

import React from 'react';
import './Footer.styles.sass';
import fb from '../../assets/images/logos/facebook.svg';
import ig from '../../assets/images/logos/instagram.svg';
import tw from '../../assets/images/logos/twitter.svg';

export default function () {
  return (
    <footer>
      <div className="logos">
        <img src={fb} alt="Facebook" />
        <img src={ig} alt="Instagram" />
        <img src={tw} alt="Twitter" />
      </div>
      <h3>I am the Footer</h3>
    </footer>
  );
}

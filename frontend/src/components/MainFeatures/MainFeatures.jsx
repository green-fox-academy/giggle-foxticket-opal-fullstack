import React from 'react';
import './MainFeatures.styles.sass';
import cat from '../../assets/images/card-cat.jpeg';

const MainFeatures = () => {
  return (
    <div className="main-features">
      <div className="card" id="card">
        <div className="card-image">
          <img src={cat} alt="" />
        </div>
        <div className="card-copy">
          <h1 className="card-primary-header">DOOM</h1>
          <h2 className="card-secondary-header">Video game series</h2>
          <p>
            Doom is a video game series and media franchise created by John
            Carmack, John Romero, Adrian Carmack, Kevin Cloud, and Tom Hall. The
            series focuses on the exploits of an unnamed space marine operating
            under the auspices of the Union Aerospace Corporation, who fights
            hordes of demons and the undead.
          </p>
        </div>
      </div>

      <div className="card" id="card">
        <div className="card-image">
          <img src={cat} alt="" />
        </div>
        <div className="card-copy">
          <h1 className="card-primary-header">Wolfenstein</h1>
          <h2 className="card-secondary-header">Video game series</h2>
          <p>
            Wolfenstein is a series of World War II video games. It was
            originally created by Muse Software, before being revived by id
            Software. The first two games in the series, Castle Wolfenstein and
            Beyond Castle Wolfenstein, were developed by Muse Software and
            focused on stealth-based gameplay from a top-down perspective.
          </p>
        </div>
      </div>

      <div className="card" id="card">
        <div className="card-image">
          <img src={cat} alt="" />
        </div>
        <div className="card-copy">
          <h1 className="card-primary-header">Quake</h1>
          <h2 className="card-secondary-header">Video game series</h2>
          <p>
            Quake is a series of first-person shooter video games, developed by
            id Software and, as of 2010, published by Bethesda Softworks. The
            series is composed of the eponymous game from 1996 and its
            nonlinear, standalone sequels which vary in setting and plot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainFeatures;

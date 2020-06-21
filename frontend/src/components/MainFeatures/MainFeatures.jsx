import React from 'react';
import './MainFeatures.styles.scss';
import cat from '../../assets/images/card-cat.jpeg'

const MainFeatures = () => {
  return (
    <div className="main-features">
      <div className="card">
        <div className="card-image">
          <img
            src={cat}
            alt=""
          />
        </div>
        <div className="card-copy">
          <h1>DOOM</h1>
          <h2>Video game series</h2>
          <p>
            Doom is a video game series and media franchise created by John
            Carmack, John Romero, Adrian Carmack, Kevin Cloud, and Tom Hall. The
            series focuses on the exploits of an unnamed space marine operating
            under the auspices of the Union Aerospace Corporation, who fights
            hordes of demons and the undead.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img
            src={cat}
            alt=""
          />
        </div>
        <div className="card-copy">
          <h1>DOOM</h1>
          <h2>Video game series</h2>
          <p>
            Doom is a video game series and media franchise created by John
            Carmack, John Romero, Adrian Carmack, Kevin Cloud, and Tom Hall. The
            series focuses on the exploits of an unnamed space marine operating
            under the auspices of the Union Aerospace Corporation, who fights
            hordes of demons and the undead.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img
            src={cat}
            alt=""
          />
        </div>
        <div className="card-copy">
          <h1>DOOM</h1>
          <h2>Video game series</h2>
          <p>
            Doom is a video game series and media franchise created by John
            Carmack, John Romero, Adrian Carmack, Kevin Cloud, and Tom Hall. The
            series focuses on the exploits of an unnamed space marine operating
            under the auspices of the Union Aerospace Corporation, who fights
            hordes of demons and the undead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainFeatures;

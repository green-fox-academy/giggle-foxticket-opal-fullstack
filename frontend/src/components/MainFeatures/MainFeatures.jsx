import React from 'react';
import './MainFeatures.styles.sass';
import busIcon from '../../assets/images/bus-icon.png';
import trainIcon from '../../assets/images/train-icon.png';
import mobileIcon from '../../assets/images/mobile-icon.png';

const MainFeatures = () => {
  return (
    <div className="main-features">
      <div className="card" id="card">
        <div className="card-image">
          <img src={busIcon} alt="" />
        </div>
        <div className="card-copy">
          <h1 className="card-primary-header">Buses</h1>
          <h2 className="card-secondary-header">Travelling by buses</h2>
          <p>
            Our company wants all buses in public transport to be clean and
            economical by 2020. The bus networks must also be easily accessible
            to people with a physical handicap. We're offering a serious amount
            of money from our income for public transport companies, to reach
            these standards.
          </p>
        </div>
      </div>

      <div className="card" id="card">
        <div className="card-image">
          <img src={trainIcon} alt="" />
        </div>
        <div className="card-copy">
          <h1 className="card-primary-header">Trains</h1>
          <h2 className="card-secondary-header">Travelling by trains</h2>
          <p>
            The number of passengers using the train is growing. Train companies
            wishes to accelerate this growth and increase the number of trains.
            Expansion of the railway network, better travel information and
            Internet in the train should make the train more attractive as an
            alternative to the car.
          </p>
        </div>
      </div>

      <div className="card" id="card">
        <div className="card-image">
          <img src={mobileIcon} alt="" />
        </div>
        <div className="card-copy">
          <h1 className="card-primary-header">Mobile</h1>
          <h2 className="card-secondary-header">Application platform</h2>
          <p>
            In the nearly future, travelers will receive real time travel advice
            via our application This should allow them to decide easily between
            various travel alternatives. Also automatic payment and integration
            of travel subscriptions to different public transport services
            should be enabled soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainFeatures;

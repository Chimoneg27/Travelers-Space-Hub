import { useSelector } from 'react-redux';

import React from 'react';

const RocketProfile = () => {
  const rockets = useSelector((state) => state.rockets.rocketArr);
  const rocketsJoin = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="Rocket-Profile">
      {
        rocketsJoin.map((rocket) => (
          <div
            key={rocket.id}
            className="rocket-name-profile"
          >
            <h3>{rocket.name}</h3>
          </div>
        ))
      }
    </div>
  );
};

export default RocketProfile;

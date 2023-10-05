import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelReservation, addReservation } from '../Redux/Rockets/rocketsSlice';

const RocketRender = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleReserve = (arg) => {
    dispatch(addReservation(arg));
  };

  const handleCancel = (arg) => {
    dispatch(cancelReservation(arg));
  };

  return (
    <div className="RocketHolder" key={rocket.id}>
      {rocket.flickr_images.length > 0 && (
      <img className="rocket-img" src={rocket.flickr_images[0]} alt={rocket.name} />
      )}
      <div className="rocket-info">

        <h3>{rocket.name}</h3>
        <p>
          <span>
            {rocket.reserved ? (<span className="Badge">Reserved</span>) : ''}
          </span>
          {rocket.description}
        </p>
        <div>
          {rocket.reserved ? (
            <button
              className="cancel-btn"
              type="button"
              onClick={() => handleReserve(rocket.id)}
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              className="reserve-btn"
              type="button"
              onClick={() => handleCancel(rocket.id)}
            >
              Reserve Rocket
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

RocketRender.propTypes = {
  rocket: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default RocketRender;

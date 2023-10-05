import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketData } from '../Redux/Rockets/rocketsSlice';
import RocketRender from './RocketRender';
import '../Styles/RocketsRender.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rocketArr);
  const isLoading = useSelector((state) => state.rockets.isLoading);
  const dataFetched = useSelector((state) => state.rockets.isDataFetched);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataFetched) {
      dispatch(getRocketData());
    }
  }, [dispatch, dataFetched]);

  return (
    <div className="rocket-page">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="rocket-container">
          {rockets.map((rocket) => (
            <RocketRender
              key={rocket.id}
              rocket={rocket}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Rockets;

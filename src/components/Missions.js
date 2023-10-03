import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsData } from '../Redux/Missions/missionsSlice';
import Navigation from './Navigation';

const Missions = () => {
  const { isLoading, error, missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsData());
  }, [dispatch]);
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div style={{ color: 'red' }}>There is an error...!</div>;
  }

  return (
    <div className="mission-page">
      <Navigation />
      <div className="mission-list">
        {
          missions.map((mission) => (
            <div key={mission.mission_id}>
              <div style={{ color: 'blue' }}>{mission.mission_id}</div>
              <div>{mission.mission_name}</div>
              <div>{mission.description}</div>

            </div>
          ))
        }
      </div>
    </div>
  );
};
export default Missions;

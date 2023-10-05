import '../Styles/Missions.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsData } from '../Redux/Missions/missionsSlice';
import Mission from './Mission';

const Missions = () => {
  const { isLoading, error, missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading) dispatch(getMissionsData());
  }, [dispatch, isLoading]);

  if (!isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div style={{ color: 'red' }}>There is an error...!</div>;
  }

  return (
    <div className="mission-page">
      <table className="missionTable">
        <thead className="missionThead">
          <tr>
            <th width="10%">
              <h3>Mision</h3>
            </th>

            <th width="65%">
              <h3>Description</h3>
            </th>

            <th width="12.5%">
              <h3>Status</h3>
            </th>
            <th width="12.5%">
              {' '}
            </th>
          </tr>
        </thead>

        <tbody>
          {

          missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              mission_id={mission.mission_id}
              mission_name={mission.mission_name}
              description={mission.description}
              mission_join={mission.mission_join}
            />
          ))

        }

        </tbody>
      </table>
    </div>
  );
};
export default Missions;

import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { joinMission, cancelMission } from '../Redux/Missions/missionsSlice';

const Mission = ({
  mission_id, mission_name, description, mission_join,
}) => {
  const dispatch = useDispatch();
  return (
    <tr key={mission_id}>
      <td><h3>{mission_name}</h3></td>
      <td><p>{description}</p></td>
      <td>
        <div>
          {mission_join ? <p> Active member</p> : <p>Not a member</p>}
        </div>
      </td>
      <td>
        {mission_join
          ? <button type="button" className="leave-mission" onClick={() => dispatch(cancelMission(mission_id))}>Leave Mission</button>
          : <button type="button" className="join-mission" onClick={() => dispatch(joinMission(mission_id))}>Join Mission</button>}
      </td>
    </tr>
  );
};
Mission.propTypes = {
  mission_id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mission_join: PropTypes.bool.isRequired,
};
export default Mission;

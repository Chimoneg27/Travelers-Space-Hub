import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const { missions } = useSelector((state) => state.missions);
  const missionsJoin = missions.filter((mission) => mission.mission_join === true);
  return (
    <>
      {

missionsJoin.map((mission) => (
  <div
    key={mission.mission_id}
    className="mission-name-profile"
  >
    <h3>{mission.mission_name}</h3>
  </div>
))
}
    </>
  );
};
export default MissionProfile;

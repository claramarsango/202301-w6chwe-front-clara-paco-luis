import CardDetail from '../../features/cardDetail/CardDetail';
import { fetchRobot } from '../../features/cardDetail/robotAPI';
const CardDetailPage = () => {
  const robotId = fetchRobot('82e32747-7e73-470f-9fab-e15f13f61d3c');

  const fakeRobot = {
    id: '',
    name: 'slkd',
    img: 'asd',
    characteristics: {
      velocity: 0,
      resistence: 0,
      creation: '',
    },
  };
  return (
    <>
      <CardDetail robot={fakeRobot} />
    </>
  );
};

export default CardDetailPage;

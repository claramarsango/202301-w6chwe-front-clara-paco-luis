import RobotCardList from '../../features/cardList/CardList';
import './Home.css';

const Home = () => {
  return (
    <>
      <h2 className="robots-subtitle">YOUR ROBOTS</h2>
      <RobotCardList />
    </>
  );
};

export default Home;

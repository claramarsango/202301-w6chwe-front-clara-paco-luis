import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Robot from '../../model/Robot';
import RobotCard from '../card/Card';
import { getRobotsAsync, selectRobots } from './cardListSlice';
import './CardList.css';

const RobotCardList = () => {
  const robotsList = useAppSelector(selectRobots);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRobotsAsync());
  }, [dispatch]);

  return (
    <>
      <ul className="card-list">
        {robotsList.map((robot: Robot) => (
          <li key={robot.id} className="list__robot">
            <RobotCard robot={robot} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotCardList;

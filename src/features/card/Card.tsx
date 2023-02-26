import { FC } from 'react';
import Robot from '../../model/Robot';
import './Card.css';

interface RobotProps {
  robot: Robot;
}

const RobotCard: FC<RobotProps> = ({ robot }) => {
  return (
    <>
      <img src={robot.img} alt="" className="robot__image" />
      <div className="robot__description">
        <h3 className="description__name">{robot.name}</h3>
        <button className="description__more-info">+</button>
      </div>
    </>
  );
};

export default RobotCard;

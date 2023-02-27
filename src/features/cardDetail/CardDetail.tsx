import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RobotProps } from '../card/Card';
import { getRobotByIdAsync, selectRobot } from './cardDetail.slice';

const CardDetail: FC<RobotProps> = ({ robot }) => {
  const { name, img, characteristics } = robot;
  const { velocity, resistence, creation } = characteristics;
  const robotDetail = useAppSelector(selectRobot);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRobotByIdAsync('82e32747-7e73-470f-9fab-e15f13f61d3c'));
  }, [dispatch]);
  return (
    <>
      <img src={img} alt="" className="robot__image" />
      <div className="robot__description">
        <h3 className="description__name">{name}</h3>
        <p className="description__characteristics">Characteristics:</p>
        <ul className="robot__characteristics">
          <li>{velocity}</li>
          <li>{resistence}</li>
          <li>{creation}</li>
        </ul>
      </div>
      <button className="description__edit">+</button>
      <button className="description__delete">-</button>
    </>
  );
};

export default CardDetail;

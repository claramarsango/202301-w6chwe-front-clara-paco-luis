interface Robot {
  id: string;
  name: string;
  img: string;
  characteristics: {
    velocity: number;
    resistence: number;
    creation: string;
  };
}

export default Robot;

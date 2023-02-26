export const fetchRobots = async () => {
  const response = await fetch(
    'https://w6chwe-back-clara-paco-luis.onrender.com/api/v1/robots',
  );
  const robots = await response.json();

  return robots;
};

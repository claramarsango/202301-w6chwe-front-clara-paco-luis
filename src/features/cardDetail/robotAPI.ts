export const fetchRobot = async (id: string) => {
  const response = await fetch(
    `https://w6chwe-back-clara-paco-luis.onrender.com/api/v1/${id}`,
  );
  const robot = await response.json();
  return robot;
};

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <h1>Robots</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;

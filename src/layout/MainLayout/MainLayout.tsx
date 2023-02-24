import { Outlet } from 'react-router-dom';
import Header from '../../features/header/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;

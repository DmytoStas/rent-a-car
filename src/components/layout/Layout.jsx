import HeaderBar from 'components/HeaderBar';
import IconSprite from 'components/IconSprite';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <IconSprite />
      <HeaderBar />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;

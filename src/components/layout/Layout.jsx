import Container from 'components/Container';
import HeaderBar from 'components/HeaderBar';
import IconSprite from 'components/IconSprite';
import Section from 'components/Section';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Toaster />
      <IconSprite />
      <HeaderBar />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Container>
            <Section>
              <Outlet />
            </Section>
          </Container>
        </main>
      </Suspense>
    </>
  );
};

export default Layout;

import MainBtn from 'components/MainBtn';

import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css['hero']}>
      <h1 className={css['hero-title']}>
        RENT-<span className={css['hero-title-accent']}>A</span>-CAR
      </h1>
      <p className={css['hero-descr']}>
        Find the rental car that's right for you
      </p>
      <MainBtn styles={css['hero-btn']} btnTitle="Go to catalog" />
    </div>
  );
};

export default Home;

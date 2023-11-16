import Icon from 'components/Icon';
import { Link, NavLink } from 'react-router-dom';
import css from './PageNav.module.css';

const PageNav = () => {
  return (
    <nav className={css['nav']}>
      <NavLink to="/">
        <Icon style={{ display: 'flex' }} width={160} height={35} id={'logo'} />
      </NavLink>

      <ul className={css['nav-list']}>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>

        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;

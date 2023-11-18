import Icon from 'components/Icon';
import { NavLink } from 'react-router-dom';
import css from './PageNav.module.css';

const PageNav = () => {
  return (
    <nav className={css['nav']}>
      <NavLink to="/">
        <Icon style={{ display: 'flex' }} width={160} height={35} id={'logo'} />
      </NavLink>

      <ul className={css['nav-list']}>
        <li>
          <NavLink className={css['nav-link']} to="/catalog">
            Catalog
          </NavLink>
        </li>

        <li>
          <NavLink className={css['nav-link']} to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;

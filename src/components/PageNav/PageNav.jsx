import Icon from 'components/Icon';
import { Link } from 'react-router-dom';

const PageNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <Icon style={{ width: 200, height: 200 }} id={'logo'} />
          </Link>
        </li>
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

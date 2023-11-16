// import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectFavorite } from 'redux/selectors';
import Card from 'components/Card';

// import css from './FavoriteList.module.css';
import utils from 'css/utils.module.css';

const FavoriteList = () => {
  const favorites = useSelector(selectFavorite);

  return (
    <ul className={utils['card-list']}>
      {favorites.map(fav => {
        return (
          <li className={utils['card-list-item']} key={fav.id}>
            <Card data={fav} />
          </li>
        );
      })}
    </ul>
  );
};

export default FavoriteList;

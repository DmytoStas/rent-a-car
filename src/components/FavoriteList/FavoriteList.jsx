import Card from 'components/Card';

// import css from './FavoriteList.module.css';
import utils from 'css/utils.module.css';

const FavoriteList = ({ favCards }) => {
  return (
    <ul className={utils['card-list']}>
      {favCards.map(fav => {
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

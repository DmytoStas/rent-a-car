import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectFavorite } from 'redux/selectors';
import { addToFav, removeFromFav } from 'redux/favorite/favoriteSlice';
import MainBtn from 'components/MainBtn';
import Icon from 'components/Icon';
import TagsList from './components/TagsList';
import noImgBg from 'img/No_IMG_BG.png';

import css from './Card.module.css';

const favBtnVariant = {
  CHECKED: 'checked',
  NOT_CHECKED: 'not-checked',
};

const Card = ({ data }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    type,
    rentalPrice,
    address,
    rentalCompany,
    mileage,
    accessories,
  } = data;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorite);

  const [carAddress, setCarAddress] = useState([]);
  const [variant, setVariant] = useState(favBtnVariant.NOT_CHECKED);
  const [isAddedToFav, setIsAddedToFav] = useState(false);

  useEffect(() => {
    if (address) {
      const splitedAddress = address.split(', ').slice(-2);
      setCarAddress(splitedAddress);
    }
  }, [address]);

  useEffect(() => {
    if (favorites.length !== 0) {
      setIsAddedToFav(favorites.some(fav => fav.id === id));

      if (isAddedToFav) {
        setVariant(favBtnVariant.CHECKED);
      } else {
        setVariant(favBtnVariant.NOT_CHECKED);
      }
    }
  }, [favorites, id, isAddedToFav]);

  const handleOnClickFav = () => {
    dispatch(isAddedToFav ? removeFromFav(data) : addToFav(data));
  };

  return (
    <>
      <div className={css['img-thumb']}>
        <img
          className={css['img']}
          src={img ? img : noImgBg}
          alt={make}
          loading="lazy"
        />

        <button onClick={handleOnClickFav} className={css['fav-btn']}>
          <Icon className={`${css['icon']} ${css[variant]}`} id={'heart'} />
        </button>
      </div>

      <div className={css['main-descr-wrap']}>
        <p className={css['main-descr']}>
          {`${make} `}
          <span className={css['accent']}>{`${model}`}</span>
          {`, ${year}`}
        </p>

        <p>{rentalPrice}</p>
      </div>

      <TagsList
        data={{ carAddress, rentalCompany, type, model, mileage, accessories }}
      />

      <MainBtn btnTitle="Learn more" />
    </>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    accessories: PropTypes.array.isRequired,
  }).isRequired,
};

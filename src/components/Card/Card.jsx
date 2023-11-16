import { useEffect, useState } from 'react';

import MainBtn from 'components/MainBtn';
import Icon from 'components/Icon';

import css from './Card.module.css';

const Card = ({ data }) => {
  const {
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

  const [carAddress, setCarAddress] = useState([]);

  useEffect(() => {
    if (!address) {
      const splitedAddress = address.split(', ');
      setCarAddress([splitedAddress.slice(-2)]);
    }
  }, [address]);

  return (
    <>
      <div className={css['img-thumb']}>
        <img
          className={css['img']}
          src={img}
          alt={`${make} ${model} ${year}`}
        />

        <Icon id={'heart'} />
      </div>

      <div className={css['main-descr-wrap']}>
        <p className={css['main-descr']}>
          {`${make} `}
          <span>{`${model}`}</span>
          {`, ${year}`}
        </p>

        <p>{rentalPrice}</p>
      </div>

      <ul>
        <li>
          <ul>
            <li>{carAddress[0]}</li>

            <li>{carAddress[1]}</li>

            <li>{rentalCompany}</li>
          </ul>
        </li>

        <li>
          <ul>
            <li>{type}</li>

            <li>{model}</li>

            <li>{mileage}</li>

            <li>{accessories[0]}</li>
          </ul>
        </li>
      </ul>

      <MainBtn btnTitle="Learn more" />
    </>
  );
};

export default Card;

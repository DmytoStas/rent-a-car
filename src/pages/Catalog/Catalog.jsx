import { useEffect, useState } from 'react';

import { useGetAllAdvertsQuery } from 'redux/api/advertsAPI';
import { filterCars, paginateCars, scrollSmooth } from 'utils';
import CatalogList from 'components/CatalogList';
import CatalogFilters from 'components/CatalogFilters';
import MainBtn from 'components/MainBtn';

import css from 'css/utils.module.css';
import toast from 'react-hot-toast';

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [totalPages, setTotalPages] = useState(0);
  const [cars, setCars] = useState([]);
  const [isSearch, setIsSearh] = useState(false);
  const [filteredCarsArr, setFilteredCarsArr] = useState([]);

  const { data: allAdverts } = useGetAllAdvertsQuery();

  useEffect(() => {
    if (!allAdverts) {
      return;
    }

    setLimit(12);

    if (!isSearch) {
      const paginatedCars = paginateCars({
        arr: allAdverts,
        limit,
        currentPage,
      });
      setCars(paginatedCars);
      setTotalPages(Math.ceil(allAdverts.length / limit));
    } else {
      const paginatedFilteredCars = paginateCars({
        arr: filteredCarsArr,
        limit,
        currentPage,
      });
      setCars(paginatedFilteredCars);
      setTotalPages(Math.ceil(filteredCarsArr.length / limit));
    }
  }, [allAdverts, currentPage, limit, isSearch, filteredCarsArr]);

  useEffect(() => {
    scrollSmooth({ arr: cars, limit });
  }, [cars, limit]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleSearch = ({ make, rentalPrice, from, to }) => {
    setIsSearh(true);
    const filteredCars = filterCars({
      carsArr: allAdverts,
      make,
      rentalPrice,
      from,
      to,
    });
    console.log(filteredCars.length);

    if (filteredCars.length > 0) {
      toast(`${filteredCars.length} cars found`, { icon: '🔍' });
    } else {
      toast.error('There is no match');
    }

    setFilteredCarsArr(filteredCars);
  };

  return (
    <>
      <CatalogFilters
        props={{
          setCurrentPage,
          handleSearch,
          currentPage,
          limit,
        }}
      />
      <CatalogList carsData={cars} />
      {currentPage < totalPages && (
        <MainBtn
          className={css['load-btn']}
          onMainBtnClick={handleLoadMore}
          btnTitle="Load More"
          styles={css['load-btn']}
        />
      )}
    </>
  );
};

export default Catalog;

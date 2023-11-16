import { useGetAdvertsQuery } from 'redux/api/advertsAPI';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import Card from 'components/Card';

// import css from './CatalogList.module.css';

const CatalogList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { page = 1, limit = 1 } = params;
  const { data: adverts } = useGetAdvertsQuery({ page, limit });

  useEffect(() => {
    if (!adverts) {
      return;
    }

    let limit = 12;

    setCurrentPage(1); // Remove after develop
    setSearchParams(prewParams => ({
      ...prewParams,
      page: currentPage,
      limit,
    }));
  }, [adverts, currentPage, setSearchParams]);

  return (
    <>
      {adverts && (
        <ul>
          {adverts.map(el => (
            <li key={el.id}>
              <Card data={el} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CatalogList;

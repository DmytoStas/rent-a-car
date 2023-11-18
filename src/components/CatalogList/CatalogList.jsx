import Card from 'components/Card';

// import css from './CatalogList.module.css';
import utilsCss from 'css/utils.module.css';

const CatalogList = ({ carsData }) => {
  return (
    <>
      <ul className={utilsCss['card-list']}>
        {carsData.map(el => (
          <li className={utilsCss['card-list-item']} key={el.id}>
            <Card data={el} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CatalogList;

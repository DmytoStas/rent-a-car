import findMaxPrice from './findMaxPrice';
import findMinPrice from './findMinPrice';

const genPriceSelectOpt = data => {
  const maxPrice = Math.ceil((findMaxPrice(data) - 10) / 10) * 10 + 10;
  const minPrice = Math.ceil((findMinPrice(data) - 10) / 10) * 10 + 10;

  const result = [];

  for (let i = minPrice; i <= maxPrice; i += 10) {
    result.push({ value: `${i}`, label: `${i}` });
  }

  return [{ label: 'To $' }, ...result];
};

export default genPriceSelectOpt;

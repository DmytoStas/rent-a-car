const genMakesSelectOpt = data => {
  const optArr = data.map(el => ({
    value: el,
    label: el,
  }));

  return [{ label: 'All makers' }, ...optArr];
};

export default genMakesSelectOpt;

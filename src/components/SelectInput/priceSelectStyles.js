import makesSelectsStyles from './makesSelectStyles';

const priceSelectStyles = () => {
  return {
    ...makesSelectsStyles,

    control: baseStyles => ({
      ...baseStyles,
      minHeight: '40px',
      height: '48px',
      minWidth: '130px',
      backgroundColor: 'var(--select-bg-cl)',
      border: 'none',
      boxShadow: 'none',
      cursor: 'pointer',
      borderRadius: '14px',
      padding: '14px 18px',
    }),
    menu: baseStyles => ({
      ...baseStyles,
      top: 55,
      right: 0,

      width: '131px',
      padding: '7px 2px 7px 10px',
      margin: 0,
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '1.25',
      color: 'var(--tags-txt-cl)',
      borderRadius: '12px',
      backgroundColor: 'var(--select-bg-cl)',
      '@media screen and (min-width: 768px)': {
        ...baseStyles['@media screen and (min-width: 768px)'],
        width: '139px',
        padding: '14px 10px 14px 18px',
        borderRadius: '20px',
      },
      '@media screen and (min-width: 1440px)': {
        ...baseStyles['@media screen and (min-width: 1440px)'],
        right: '0',
        width: '130px',
        fontSize: '16px',
      },
    }),
  };
};

export default priceSelectStyles;

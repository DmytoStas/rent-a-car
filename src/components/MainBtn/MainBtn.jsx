import PropTypes from 'prop-types';

import css from './MainBtn.module.css';

const MainBtn = ({ btnTitle, onMainBtnClick, styles }) => {
  return (
    <button
      className={`${css['main-btn']} ${styles}`}
      type="button"
      onClick={() => onMainBtnClick()}
    >
      {btnTitle}
    </button>
  );
};

export default MainBtn;

MainBtn.propTypes = {
  btnTitle: PropTypes.string.isRequired,
  onMainBtnClick: PropTypes.func.isRequired,
  styles: PropTypes.string,
};

import PulseLoader from 'react-spinners/PulseLoader';

const Loader = ({
  size = 10,
  margin = 6,
  position = {},
  color = 'var(--main-txt-cl)',
}) => {
  return (
    <PulseLoader
      color={color}
      cssOverride={position}
      loading={true}
      size={size}
      margin={margin}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;

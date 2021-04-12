
import PropTypes from "prop-types";
import "../../styles.css";

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });

const Button = ({ onLoadMore }) => (
//const Button = ({ onClick }) => (
//<button className="button" onClick={onClick}>
  <button type="button" className="Button" onClick={onLoadMore}>
    Load more
  </button>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired
};

export { Button };


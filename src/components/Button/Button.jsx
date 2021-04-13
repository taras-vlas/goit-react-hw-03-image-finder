
import PropTypes from "prop-types";
//import "../../styles.css";
import styles from './Button.module.css';

const Button = ({ onLoadMore }) => (

  <button type="button" className={styles.Button} onClick={onLoadMore}>
    Load more
  </button>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired
};

export { Button };


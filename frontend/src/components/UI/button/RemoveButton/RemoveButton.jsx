import classes from "./RemoveButton.module.scss";
import PropTypes from "prop-types";

const RemoveButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={classes.removeButton}>
      {children}
    </button>
  );
};

RemoveButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RemoveButton;

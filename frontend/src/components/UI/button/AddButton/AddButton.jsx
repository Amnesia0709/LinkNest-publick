import classes from "./AddButton.module.scss";
import PropTypes from "prop-types";

const AddButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={classes.addButton}>
      {children}
    </button>
  );
};

AddButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AddButton;

import classes from "./EmptyList.module.scss";

const EmptyList = ({ children }) => {
  return <h1 className={classes.emptyList}>{children}</h1>;
};

export default EmptyList;

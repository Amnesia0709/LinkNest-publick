import classes from "./UploadCategories.module.scss";

const UploadCategoriesItem = ({ category }) => {
  return <li className={classes.categoriesList__items}>{category}</li>;
};

export default UploadCategoriesItem;

import classes from "./UploadCategories.module.scss";
import UploadCategoriesItem from "./UploadCategoriesItem.jsx";

const UploadCategoriesList = ({ categoryList }) => {
  return (
    <ul className={classes.categoriesList}>
      {categoryList.map((category, index) => (
        <UploadCategoriesItem category={category} key={index} />
      ))}
    </ul>
  );
};

export default UploadCategoriesList;

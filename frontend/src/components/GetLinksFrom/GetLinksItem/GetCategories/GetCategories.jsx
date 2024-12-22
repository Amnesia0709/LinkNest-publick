import classes from "./GetCategories.module.scss";

const GetCategories = ({ categories }) => {
  return (
    <ul className={classes.categoryList}>
      {categories.map((comment, index) => (
        <li key={index} className={classes.categoryItems}>
          {comment}
        </li>
      ))}
    </ul>
  );
};

export default GetCategories;

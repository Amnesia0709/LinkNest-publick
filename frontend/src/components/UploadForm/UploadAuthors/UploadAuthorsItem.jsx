import classes from "./UploadAuthors.module.scss";

const UploadAuthorsItem = ({ author }) => {
  return <li className={classes.authorsList__items}>{author}</li>;
};

export default UploadAuthorsItem;

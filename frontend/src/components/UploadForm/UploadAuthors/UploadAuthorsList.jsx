import classes from "./UploadAuthors.module.scss";
import UploadAuthorsItem from "./UploadAuthorsItem.jsx";

const UploadAuthorsList = ({ authorsList }) => {
  return (
    <ul className={classes.authorsList}>
      {authorsList.map((author, index) => (
        <UploadAuthorsItem author={author} key={index} />
      ))}
    </ul>
  );
};

export default UploadAuthorsList;

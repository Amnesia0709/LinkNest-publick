import classes from "./GetAuthors.module.scss";

const GetAuthors = ({ authors }) => {
  return (
    <ul className={classes.authorsList}>
      {authors.map((author, index) => (
        <li key={index} className={classes.authorItem}>
          {author}
        </li>
      ))}
    </ul>
  );
};

export default GetAuthors;

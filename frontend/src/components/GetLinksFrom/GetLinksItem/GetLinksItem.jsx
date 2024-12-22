import classes from "./GetLinksItem.module.scss";
import GetComments from "./GetComments/GetComments.jsx";
import GetCategories from "./GetCategories/GetCategories.jsx";
import GetAuthors from "./GetAuthors/GetAuthors.jsx";

const GetLinksItem = ({ link }) => {
  const checkInterestLevel = (interestLevel) => {
    if (interestLevel >= 7) {
      return classes.interestGood;
    } else if (interestLevel < 7 && interestLevel > 3) {
      return classes.interestMedium;
    } else {
      return classes.interestBad;
    }
  };

  console.log(link.authors);

  return (
    <div className={classes.link}>
      <div className={classes.linkHeader}>
        <h2 className={classes.title}>{link.title}</h2>
        <span
          className={`${classes.interestLevel} ${checkInterestLevel(parseInt(link.interestLevel))}`}
        >
          {link.interestLevel}
        </span>
      </div>
      <div className={classes.linkSection}>
        <h3 className={classes.linkSectionTitle}>Ссылка:</h3>
        <a href={`${link.url}`} className={classes.linkSectionUrl}>
          {link.url}
        </a>
      </div>
      <div className={classes.linkSection}>
        <h3 className={classes.linkSectionTitle}>Комментарий(и):</h3>
        <p>
          {link.comments.length ? (
            <GetComments comments={link.comments} />
          ) : (
            <h2 className={classes.isNone}>Нет комментариев</h2>
          )}
        </p>
      </div>
      <div className={classes.linkSection}>
        <h3 className={classes.linkSectionTitle}>Категории:</h3>
        {link.categories.length ? (
          <GetCategories categories={link.categories} />
        ) : (
          <h2 className={classes.isNone}>Не указан(ы) категория(и)</h2>
        )}
      </div>
      <div className={classes.linkSection}>
        <h3 className={classes.linkSectionTitle}>Авторы:</h3>
        {link.authors.length ? (
          <GetAuthors authors={link.authors} />
        ) : (
          <h2 className={classes.isNone}>Не указан(ы) автор(ы)</h2>
        )}
      </div>
    </div>
  );
};

export default GetLinksItem;

import classes from "./SerachLinkByTitile.module.scss";

const SearchLinkByTitle = (props) => {
  return (
    <input
      type="search"
      placeholder="⌕ Найти ссылку по заголовку"
      className={classes.searchLink}
      {...props}
    />
  );
};

export default SearchLinkByTitle;

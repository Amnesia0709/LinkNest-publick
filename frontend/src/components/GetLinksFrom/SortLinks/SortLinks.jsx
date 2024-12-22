import classes from "./SortLinks.module.scss";

const SortLinks = ({ linksSortedMethod, setLinksSortedMethod }) => {
  return (
    <div>
      <h2 className={classes.title}>Сортировка</h2>
      <select
        className={classes.linkSortedSelect}
        value={linksSortedMethod}
        onChange={(e) => setLinksSortedMethod(e.target.value)}
      >
        <optgroup className={classes.linkSortedOptions} label="Сортировать по">
          <option value="url">Ссылке</option>
          <option value="title">Заголовку</option>
          <option value="interestLevel">Уровню интересности</option>
        </optgroup>
      </select>
    </div>
  );
};

export default SortLinks;

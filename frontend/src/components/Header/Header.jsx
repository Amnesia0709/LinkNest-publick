import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.glowingEllipse}>П</div>
      <div className={classes.logo}>
        <img src="../../../public/logo.svg" alt="Logo" />
        <h1 className={classes.brandName}>LinkNest</h1>
      </div>
      <ul className={classes.navbar}>
        <Link className={classes.navbar__items} to="/">
          Добавить ссылку
        </Link>
        <Link className={classes.navbar__items} to="/all-links">
          Посмотреть все ссылки
        </Link>
      </ul>
    </header>
  );
};

export default Header;

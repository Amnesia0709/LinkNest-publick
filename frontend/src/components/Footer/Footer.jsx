import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.footerLinkGitHub}>
          <img src="../../../public/github-logo.svg" alt="GitHub Logo" />
          <a
            className={classes.footerLinkGitHub__description}
            href="https://github.com/Amnesia0709"
          >
            Amnesia0709
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

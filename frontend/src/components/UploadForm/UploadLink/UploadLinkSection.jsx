import classes from "./UploadLink.module.scss";

const UploadLinkSection = ({ uploadLink, setUploadLink }) => {
  return (
    <section className={classes.uploadLinkSection}>
      <div className="container">
        <div className="grid grid-cols-2 gap-7">
          <h1 className={classes.uploadLinkSection__title}>
            Загрузить свою
            <br />
            ссылку
          </h1>
          <p className={classes.uploadLinkSection__description}>
            На этой странице вы можете загрузить свою ссылку. Добавить
            категорию, к которой она относиться. Добавить автора, если это
            ссылкка на статью. Также установить уровень интересности ссылки. Все
            это помогает при дальнейшем поиске ссылки.
          </p>
        </div>
        <input
          type="text"
          value={uploadLink}
          onChange={(event) => setUploadLink(event.target.value)}
          placeholder="Вставьте ссылку"
          className={classes.uploadLinkSection__fieldInput}
        />
      </div>
    </section>
  );
};

export default UploadLinkSection;

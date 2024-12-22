import classes from "./UploadMetadata.module.scss";

const UploadMetadata = ({ uploadLinkMetadata, setUploadLinkMetadata }) => {
  return (
    <section className={classes.metadataSection}>
      <div className="container">
        <div className="grid grid-cols-2 gap-8">
          <div className={classes.metadataSection__title}>
            <label className={classes.metadataSection__label}>Заголовок:</label>
            <input
              placeholder="Введите заголовок"
              value={uploadLinkMetadata.title}
              onChange={(event) =>
                setUploadLinkMetadata({
                  ...uploadLinkMetadata,
                  title: event.target.value,
                })
              }
              type="text"
              className={classes.metadataSection__title__filedInput}
            />
          </div>
          <div className={classes.metadataSection__comment}>
            <label className={classes.metadataSection__label}>
              Комментарий:
              <br />
            </label>
            <textarea
              placeholder="Введите комментарий..."
              rows="5"
              value={uploadLinkMetadata.comment}
              onChange={(event) =>
                setUploadLinkMetadata({
                  ...uploadLinkMetadata,
                  comment: event.target.value,
                })
              }
              className={classes.metadataSection__comment__filedInput}
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadMetadata;

import classes from "./UploadAuthors.module.scss";
import AddButton from "../../UI/button/AddButton/AddButton.jsx";
import RemoveButton from "../../UI/button/RemoveButton/RemoveButton.jsx";
import { useState } from "react";
import EmptyList from "../../UI/EmptyList/EmptyList.jsx";
import UploadAuthorsList from "./UploadAuthorsList.jsx";

const UploadAuthors = ({ uploadAuthorsList, setUploadAuthorsList }) => {
  const [uploadAuthorsField, setUploadAuthorsField] = useState("");

  const addNewAuthor = (e) => {
    e.preventDefault();

    setUploadAuthorsList([...uploadAuthorsList, uploadAuthorsField]);
    setUploadAuthorsField("");
  };

  const removeAuthors = (e) => {
    e.preventDefault();

    setUploadAuthorsList([]);
  };

  return (
    <section className={classes.uploadAuthors}>
      <div className="container">
        <div className="grid grid-cols-2 gap-8">
          <div className={classes.uploadAuthors__adder}>
            <label htmlFor="" className={classes.uploadAuthors__label}>
              Авторы:
            </label>
            <input
              type="text"
              placeholder="Введите название категории"
              value={uploadAuthorsField}
              onChange={(event) => setUploadAuthorsField(event.target.value)}
              className={classes.uploadAuthors__adder__fieldInput}
            />
            <div className={classes.uploadAuthors__adder__btn}>
              <AddButton onClick={addNewAuthor}>Добавить</AddButton>
              <RemoveButton onClick={removeAuthors}>Удалить</RemoveButton>
            </div>
          </div>
          <div className={classes.uploadAuthors__list}>
            <label htmlFor="" className={classes.uploadAuthors__label}>
              Список добавленных категорий:
            </label>
            {uploadAuthorsList.length ? (
              <UploadAuthorsList authorsList={uploadAuthorsList} />
            ) : (
              <EmptyList>Нет добавленных авторов</EmptyList>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadAuthors;

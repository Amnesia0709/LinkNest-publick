import classes from "./UploadCategories.module.scss";
import { useState } from "react";
import UploadCategoriesList from "./UploadCategoriesList.jsx";
import AddButton from "../../UI/button/AddButton/AddButton.jsx";
import RemoveButton from "../../UI/button/RemoveButton/RemoveButton.jsx";
import EmptyList from "../../UI/EmptyList/EmptyList.jsx";

const UploadCategories = ({
  uploadCategoriesList,
  setUploadCategoriesList,
}) => {
  const [uploadCategoryField, setUploadCategoryField] = useState("");

  const addCategory = (e) => {
    e.preventDefault();

    setUploadCategoriesList([...uploadCategoriesList, uploadCategoryField]);
    setUploadCategoryField("");
  };

  const removeCategories = (e) => {
    e.preventDefault();
    setUploadCategoriesList([]);
  };

  return (
    <section className={classes.uploadCategories}>
      <div className="container">
        <div className="grid grid-cols-2 gap-8">
          <div className={classes.uploadCategories__adder}>
            <label
              htmlFor="uploadCategoryField"
              className={classes.uploadCategories__label}
            >
              Категория:
            </label>
            <input
              type="text"
              id={uploadCategoryField}
              value={uploadCategoryField}
              onChange={(event) => setUploadCategoryField(event.target.value)}
              placeholder="Введите название категории"
              className={classes.uploadCategories__adder__fieldInput}
            />
            <div className={classes.uploadCategories__adder__btn}>
              <AddButton onClick={addCategory}>Добавить</AddButton>
              <RemoveButton onClick={removeCategories}>Удалить</RemoveButton>
            </div>
          </div>
          <div className={classes.uploadCategories__list}>
            <label htmlFor="" className={classes.uploadCategories__label}>
              Список добавленных категорий:
            </label>
            {uploadCategoriesList.length ? (
              <UploadCategoriesList categoryList={uploadCategoriesList} />
            ) : (
              <EmptyList>Нет добавленных категорий</EmptyList>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadCategories;

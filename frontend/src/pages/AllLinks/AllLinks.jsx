import classes from "./AllLinks.module.scss";
import GetLinksForm from "../../components/GetLinksFrom/GetLinksForm.jsx";
import { useState } from "react";

const AllLinks = () => {
  const [numberOfLinks, setNumberOfLinks] = useState(17);

  return (
    <>
      <div className="container">
        <div className={classes.hero}>
          <div className="grid grid-cols-2 gap-8">
            <h1 className={classes.hero__title}>
              посмотреть все Добавленные ссылки{" "}
              <sup className={classes.hero__numberOfLinks}>
                [ {numberOfLinks} ]
              </sup>
            </h1>
            <p className={classes.hero__description}>
              Здесь вы можете увидеть все добавленные ссылки. Отсортировать их
              по категориям, авторам, комментариям, уровню интересности
            </p>
          </div>
        </div>
        <GetLinksForm setNumberOfLinks={setNumberOfLinks} />
      </div>
    </>
  );
};

export default AllLinks;

import { useState } from "react";

import classes from "./UploadInterestLevel.module.scss";

const UploadInterestLevel = ({
  activeInterestLevel,
  setActiveInterestLevel,
}) => {
  const [interestLevelList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <section className={classes.interestLevel}>
      <div className="container">
        <h2 className={classes.interestLevel__title}>Уровень интересности:</h2>
        <ul className={classes.interestLevel__list}>
          {interestLevelList.map((interestLevel) => (
            <li
              className={`${classes.interestLevel__listItems} ${activeInterestLevel === interestLevel ? classes.isActive : ""}`}
              key={interestLevel}
              onClick={() => setActiveInterestLevel(interestLevel)}
            >
              {interestLevel}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UploadInterestLevel;

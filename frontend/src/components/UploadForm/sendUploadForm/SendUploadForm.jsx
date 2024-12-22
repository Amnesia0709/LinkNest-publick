import AddButton from "../../UI/button/AddButton/AddButton.jsx";
import classes from "./SendUploadForm.module.scss";
import { useState } from "react";
import axios from "axios";


const SendUploadForm = ({ form }) => {
  const [statusUpload, setStatusUpload] = useState(false);

  const sendUploadForm = async () => {
    try {
      if (form.url.length < 1) {
        alert("Добавьте ссылку!");
        return;
      }

      setTimeout(() => {
        setStatusUpload(true);
      }, 150);

      setTimeout(() => {
        setStatusUpload(false);
      }, 4000);

      return await axios.post(`http://localhost:8080/api/v1/links`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container" style={{ marginTop: 52 }}>
      <div className={classes.sendUplaodForm}>
        <AddButton onClick={sendUploadForm}>Добавить ссылку</AddButton>
        {statusUpload ? (
          <div className={classes.statusSendUploadForm}>
            Успешно отправлено!
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SendUploadForm;

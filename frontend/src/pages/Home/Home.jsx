import { useState } from "react";

import UploadLinkSection from "../../components/UploadForm/UploadLink/UploadLinkSection.jsx";
import UploadMetadata from "../../components/UploadForm/UploadMetadata/UploadMetadata.jsx";
import UploadCategories from "../../components/UploadForm/UploadCategories/UploadCategories.jsx";
import UploadAuthors from "../../components/UploadForm/UploadAuthors/UploadAuthors.jsx";
import UploadInterestLevel from "../../components/UploadForm/UploadInterestLevel/UploadInterestLevel.jsx";
import SendUploadForm from "../../components/UploadForm/sendUploadForm/SendUploadForm.jsx";
import axios from "axios";

const Home = () => {
  const [uploadLink, setUploadLink] = useState("");
  const [uploadLinkMetadata, setUploadLinkMetadata] = useState({
    title: "",
    comment: "",
  });
  const [uploadCategoriesList, setUploadCategoriesList] = useState([]);
  const [uploadAuthorsList, setUploadAuthorsList] = useState([]);
  const [activeInterestLevel, setActiveInterestLevel] = useState(null);

  const uploadForm = {
    url: uploadLink,
    title: uploadLinkMetadata.title,
    comment: uploadLinkMetadata.comment,
    categories: uploadCategoriesList,
    authors: uploadAuthorsList,
    interestLevel: String(activeInterestLevel),
  };

  return (
    <>
      <UploadLinkSection
        uploadLink={uploadLink}
        setUploadLink={setUploadLink}
      />
      <UploadMetadata
        uploadLinkMetadata={uploadLinkMetadata}
        setUploadLinkMetadata={setUploadLinkMetadata}
      />
      <UploadCategories
        uploadCategoriesList={uploadCategoriesList}
        setUploadCategoriesList={setUploadCategoriesList}
      />
      <UploadAuthors
        uploadAuthorsList={uploadAuthorsList}
        setUploadAuthorsList={setUploadAuthorsList}
      />
      <UploadInterestLevel
        activeInterestLevel={activeInterestLevel}
        setActiveInterestLevel={setActiveInterestLevel}
      />

      <SendUploadForm form={uploadForm} />
    </>
  );
};

export default Home;

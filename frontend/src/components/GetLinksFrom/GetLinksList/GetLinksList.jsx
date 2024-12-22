import GetLinksItem from "../GetLinksItem/GetLinksItem.jsx";

const GetLinksList = ({ linksList }) => {
  return (
    <>
      {linksList.map((link, index) => (
        <GetLinksItem link={link} key={index} />
      ))}
    </>
  );
};

export default GetLinksList;

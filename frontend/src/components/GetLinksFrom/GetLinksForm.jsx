import { useEffect, useState } from "react";
import GetLinksList from "./GetLinksList/GetLinksList.jsx";
import SearchLinkByTitle from "./SearchLinkByTitle/SearchLinkByTitle.jsx";
import SortLinks from "./SortLinks/SortLinks.jsx";
import axios from "axios";

const GetLinksForm = ({ setNumberOfLinks }) => {
  const [linksList, setLinksList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/links");
      setLinksList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(`Ошибка при получение данных: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [linksSortedMethod, setLinksSortedMethod] = useState("title");
  const [sortedLinks, setSortedLinks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const sortAndSearchLinks = (sortMethod, query) => {
    let sortedList;

    if (sortMethod === "interestLevel") {
      sortedList = [...linksList].sort(
        (a, b) => parseInt(b.interestLevel, 10) - parseInt(a.interestLevel, 10),
      );
    } else {
      sortedList = [...linksList].sort((a, b) =>
        a[sortMethod].localeCompare(b[sortMethod]),
      );
    }

    const filtered = sortedList.filter((item) => {
      return item.title.toUpperCase().includes(query.toUpperCase());
    });

    setSortedLinks(filtered);
  };

  useEffect(() => {
    sortAndSearchLinks(linksSortedMethod, searchQuery);
  }, [linksList, linksSortedMethod, searchQuery]);

  useEffect(() => {
    setNumberOfLinks(sortedLinks.length);
  }, [sortedLinks]);

  return (
    <div>
      <SearchLinkByTitle
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="grid grid-cols-3 gap-8 mt-8">
        <SortLinks
          linksSortedMethod={linksSortedMethod}
          setLinksSortedMethod={setLinksSortedMethod}
        />
        <div className="col-span-2" style={{ minHeight: 500 }}>
          {sortedLinks.length ? (
            <GetLinksList linksList={sortedLinks} />
          ) : (
            <h1 style={{ color: "#999999", fontSize: 24 }}>
              Нет ссылок с таким названием.....
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetLinksForm;

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { WishlistContext } from "../../context/WishlistContext";
import UniversityCard from "../../components/universityCard/UniversityCard";
import CountryFilter from "../../components/countryFilter/CountryFilter";
import "./UniversityListPage.css";
import { Pagination } from "react-bootstrap";
import TailSpinLoader from "../../components/loaders/TailSpinLoader";

const UniversityListPage = () => {
  const [universities, setUniversities] = useState([]);
  const [search, setSearch] = useState("");

  const [country, setCountry] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isUniversityLoading, setUniversityLoading] = useState(true);
  const { addToWishlist, wishlist } = useContext(WishlistContext);

  // setCountry(con);

  const limit = 12;
  const pageRange = 1;

  useEffect(() => {
    console.log("use effect1");
    const fetchTotalResults = async () => {
      setUniversityLoading(true);
      const url = `${import.meta.env.VITE_API}/search?name=${search}&country=${country}`;
      const result = await axios.get(url);
      setTotalResults(result.data.length);
      setUniversityLoading(false);
    };

    fetchTotalResults();
  }, [search, country]);

  useEffect(() => {
    console.log("use effect2");
    const fetchData = async () => {
      setUniversityLoading(true);
      const offset = (page - 1) * limit;
      const url = `${import.meta.env.VITE_API}/search?name=${search}&country=${country}&offset=${offset}&limit=${limit}`;
      const result = await axios.get(url);
      setUniversities(result.data);
      setUniversityLoading(false);
    };

    fetchData();
  }, [search, country, page]);

  useEffect(() => {
    setPage(1);
  }, [search, country]);

  const totalPages = Math.ceil(totalResults / limit);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const generatePaginationItems = () => {
    const items = [];

    if (page > pageRange + 1) {
      items.push(
        <Pagination.Item key={1} onClick={() => handlePageChange(1)}>
          1
        </Pagination.Item>
      );
      if (page > pageRange + 2) {
        items.push(<Pagination.Ellipsis key="start-ellipsis" />);
      }
    }

    for (
      let i = Math.max(1, page - pageRange);
      i <= Math.min(totalPages, page + pageRange);
      i++
    ) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === page}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    if (page < totalPages - pageRange) {
      if (page < totalPages - pageRange - 1) {
        items.push(<Pagination.Ellipsis key="end-ellipsis" />);
      }
      items.push(
        <Pagination.Item
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    return items;
  };
  console.log("render");
  return (
    <div className="universities-container">
      <header>
        <h2 className="title">Universities</h2>
      </header>
      <CountryFilter setCountry={setCountry} />
      <input
        className="search-bar"
        type="search"
        placeholder="Search Universities"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isUniversityLoading ? (
        <div className="loader-container">
          <TailSpinLoader />
        </div>
      ) : (
        <div className="university-list">
          {universities.map((university, index) => (
            <UniversityCard
              key={`${index}-${university.name}`}
              university={university}
              isOnWishlist={wishlist.some(
                (item) => item.name === university.name
              )}
              onAddToWishlist={() => addToWishlist(university)}
            />
          ))}
        </div>
      )}

      {!isUniversityLoading && (
        <nav
          aria-label="University pagination"
          className="pagination-container"
        >
          <Pagination>
            <Pagination.Prev
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              {"<"}
            </Pagination.Prev>
            {generatePaginationItems()}
            <Pagination.Next
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              {">"}
            </Pagination.Next>
          </Pagination>
        </nav>
      )}
    </div>
  );
};

export default UniversityListPage;

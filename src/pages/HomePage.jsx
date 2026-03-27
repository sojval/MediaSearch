import SearchBar from "../Components/SearchBar";
import Tab from "../Components/Tab";
import ResultGrid from "../Components/ResultGrid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
      <NavBar/>
      <SearchBar />
      {query != "" ? (
        <div>
          <Tab />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;

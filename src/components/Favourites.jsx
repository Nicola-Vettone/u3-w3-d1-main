import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Favourites = () => {
  const favouriteJobs = useSelector((state) => state.favourites.favourites);
  return (
    <ul>
      {favouriteJobs.map((favouriteJobs, index) => (
        <li key={`job-${index}`}>
          <Link>{favouriteJobs}</Link>
        </li>
      ))}
    </ul>
    /*    console.log(favouriteJobs) */
  );
};
export default Favourites;

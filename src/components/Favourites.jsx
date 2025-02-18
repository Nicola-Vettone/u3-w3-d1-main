import { useSelector } from "react-redux";
const Favourites = () => {
  const favouriteJobs = useSelector((state) => state.favourites.favourites);
  return (
    /*    <ul>
      {favouriteJobs.map((favouriteJobs, index) => (
        <li key={`job-${index}`}>{favouriteJobs}</li>
      ))}
    </ul> */
    console.log(favouriteJobs)
  );
};
export default Favourites;

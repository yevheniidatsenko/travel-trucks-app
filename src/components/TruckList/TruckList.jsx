import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import css from "./TruckList.module.css";
import TruckItem from "../TruckItem/TruckItem";
import Loader from "../Loader/Loader";
import { isLoading } from "../../redux/truck/selectors";

const TruckList = ({ filteredTrucks }) => {
  const loading = useSelector(isLoading);

  if (loading) {
    return <Loader />;
  }

  if (filteredTrucks?.length === 0) {
    return <p className={css.text}>Sorry, there are no campers!</p>;
  }

  return (
    <ul className={css.list}>
      {filteredTrucks.map((item) => (
        <li className={css.list_item} key={item.id}>
          <TruckItem truck={item} />
        </li>
      ))}
    </ul>
  );
};

TruckList.propTypes = {
  filteredTrucks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default TruckList;

import { useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourites/selectors";
import { selectTrucks } from "../../redux/truck/selectors";
import TruckList from "../../components/TruckList/TruckList";
import css from "./FavouritesPage.css";

const FavouritesPage = () => {
  const favourites = useSelector(selectFavourites);
  const allTrucks = useSelector(selectTrucks);

  const favouriteTrucks = allTrucks.filter((truck) =>
    favourites.includes(truck.id)
  );

  return (
    <div className={css.favourites_wrapper}>
      <h2 className={css.favourites_title}>Your Favourites</h2>
      <div className={css.favourites_list}>
        <TruckList filteredTrucks={favouriteTrucks} />
      </div>
    </div>
  );
};

export default FavouritesPage;

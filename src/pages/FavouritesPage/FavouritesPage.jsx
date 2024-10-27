import { useSelector } from "react-redux";
import { useMemo } from "react";
import { selectFavourites } from "../../redux/favourites/selectors";
import { selectTrucks } from "../../redux/truck/selectors";
import TruckList from "../../components/TruckList/TruckList";
import css from "./FavouritesPage.module.css";

const FavouritesPage = () => {
  const { favourites, allTrucks } = useSelector((state) => ({
    favourites: selectFavourites(state),
    allTrucks: selectTrucks(state),
  }));

  const favouriteTrucks = useMemo(
    () => allTrucks.filter((truck) => favourites.includes(truck.id)),
    [allTrucks, favourites]
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

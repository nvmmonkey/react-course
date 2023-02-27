import { useContext } from "react";
import { Link } from "react-router-dom";
import FavouriteContext from "../../store/favourite-context";

import classes from "./Mainnavigationbar.module.css";

function NavBar() {
  const favouriteCtx = useContext(FavouriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>⚛️ REACT MEET</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites<span className={classes.badge}>{favouriteCtx.totalFavourites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

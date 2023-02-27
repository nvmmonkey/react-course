import { useContext } from "react";
import FavouriteContext from "../../store/favourite-context";
import Card from "../ui/Card";
import classes from "./MeetupItems.module.css";

function MeetupItem(props) {
  const favouriteCtx = useContext(FavouriteContext);
  const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id);
  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favouriteCtx.removeFavourite(props.id);
    } else {
      favouriteCtx.addFavourite({
        id: props.id,
        title: props.title,
        content: props.content,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.content}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove from Favourites" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

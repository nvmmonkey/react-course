import { useContext } from "react";
import MeetupList from "../components/meetups/Meetuplist";
import FavouriteContext from "../store/favourite-context";

function FavouritesPage() {
  const favouriteCtx = useContext(FavouriteContext);
  let content
  if (favouriteCtx.totalFavourites === 0){
    content = <p>You have got no favourites yet! Start adding some?</p>
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;

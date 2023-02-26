import { Route, Switch } from "react-router-dom";

import AllMeetUpsPage from "./pages/Allmeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetUpsPage from "./pages/Newmeetups";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} exact>
          <AllMeetUpsPage />
        </Route>
        <Route path={"/new-meetup"}>
          <NewMeetUpsPage />
        </Route>
        <Route path={"/favorites"}>
          <FavouritesPage />
        </Route>
      </Switch>
      </Layout>
  );
}

export default App;

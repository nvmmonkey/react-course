import classes from "./Layout.module.css";
import NavBar from "./Mainnavigationbar";

function Layout(props) {
  return (
    <div>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;

import Card from "../ui/Card";
import classes from "./MeetupItems.module.css";

function MeetupItem(props) {
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
          <button>To Favourite</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

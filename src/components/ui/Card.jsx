import classes from "./Card.module.css"

function Card(props){
    return <div className={classes.card}>{props.children}{/*Wrapper of all Children Components in the props*/}</div>
}

export default Card 
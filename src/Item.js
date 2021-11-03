import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Item(props) {
    return(
      <div>{props.details.name} - {props.details.price}</div>
    )
}

export default Item;
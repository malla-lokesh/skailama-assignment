import "./styles.css";
import AddIcon from "../../svgs/AddIcon";

const Button = (props) => {
  return (
    <div className="btn-div">
      <button className="btn" onClick={props.openDialog}>
        {props.text}
      </button>
      <div className="add-icon">
        <AddIcon />
      </div>
    </div>
  );
};

export default Button;

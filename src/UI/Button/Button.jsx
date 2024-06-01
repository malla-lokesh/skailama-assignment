import "./styles.css";
import AddIcon from "../../svgs/AddIcon";
import { useLocation } from "react-router-dom";

const Button = (props) => {
  const location = useLocation();

  return (
    <div className="btn-div">
      <button
        className={location?.pathname === "/projects" ? "projects-btn" : "btn"}
        onClick={props.openDialog}
      >
        {props.text}
      </button>
      <div className="add-icon">
        <AddIcon />
      </div>
    </div>
  );
};

export default Button;

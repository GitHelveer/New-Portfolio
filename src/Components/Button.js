import { Children } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button({ children, linkto }) {
  return (
    <button className="menubut">
      <Link to={linkto} className="menu-link">
        {children}
      </Link>
    </button>
  );
}

export default Button;
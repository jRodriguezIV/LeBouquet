import "./NavBar.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate()

  if (location.pathname !== "/")
    return (
      <div className="navBar">
        <div className="navBarText">
            <p className="icon" onClick={() => navigate("/") }> <strong>Le Bouquet 🌸</strong></p>
            <p className="new" onClick={() => navigate(`/new`)} >New Flower</p>
        </div>
      </div>
    );
}

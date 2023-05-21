import "./NavBar.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate()

  if (location.pathname !== "/")
    return (
      <div className="navBar">
        <div className="navBarText">
            <p className="" onClick={() => navigate("/") }> <strong>Le Bouquet 🌸</strong></p>
        </div>
      </div>
    );
}

import "./NavBar.css";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  if (location.pathname !== "/")
    return (
      <div>
        <h1>NavBar</h1>
      </div>
    );
}

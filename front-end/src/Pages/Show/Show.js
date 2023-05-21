import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowFlower from "../../Components/ShowFlower/ShowFlower";

const API = process.env.REACT_APP_API_URL;

export default function Show() {
  const [flower, setFlower] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/flowers/${id}`)
      .then((response) => setFlower(response.data))
      .catch((e) => console.error("warn", e));
  }, [id]);

  return (
    <div>
      <ShowFlower flower={flower} />
    </div>
  );
}

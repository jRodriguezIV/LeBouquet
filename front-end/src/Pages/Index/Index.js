import { useEffect, useState } from "react";
import Carousel from "../../Components/NavBar/Carousel/Carousel";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Index() {
  const [flowerList, setFlowerList] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/flowers`)
      .then((response) => setFlowerList(response.data))
      .catch((e) => console.warn("catch", e));
  }, []);

  return (
    <div>
      <Carousel flowerList={flowerList}/>
      <h1>Index Page</h1>
    </div>
  );
}

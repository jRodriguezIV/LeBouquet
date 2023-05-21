import { Link, useParams } from "react-router-dom";
import "./ShowFlower.css";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

export default function ShowFlower({ flower }) {
    const { id } = useParams()

    const handleDelete = () => {
        axios
        .delete(`${API}/flowers/${id}`)
        .catch(e => console.warn("catch", e))
    }

  return (
      <div key={flower.id} className="showFlowerContainer">
        <a href="/flowers">{``}</a>
      <img className="flowerImage" src={flower.image} alt={flower.name} />

      <div className="flowerInfo">
        <p>
          Flower Name:&nbsp;
          <span className="spanRight">{flower.name}</span>
        </p>
        <p>
          Flower Cost:&nbsp;
          <span className="spanRight">{`$${flower.cost}`}(each)</span>
        </p>
        <p>
          Scientific Name:&nbsp;
          <span className="spanRight">{flower.scientific_name}</span>
        </p>
        <p>
          Flower Color:&nbsp;
          <span className="spanRight" style={{ color: flower.color }}>
            {flower.color}
          </span>
        </p>
        <p>
          Sunlight Requirement:&nbsp;
          <span className="spanRight">{flower.sunlight}</span>
        </p>
        <p>
          Watering Requirement:&nbsp;
          <span className="spanRight">{flower.watering}</span>
        </p>
        <p>
          Favorite Flower?&nbsp;
          <span className="spanRight">{flower.is_favorite ? "⭐️" : "❌"}</span>
        </p>
        <Link to={`/flowers`}>
        <button style={{marginRight:"15%"}} className="editButton"> 
            {`<< Gallery`}
        </button>
        </Link>

        

        <Link to={`/flowers/${flower.id}/edit`}>
        <button style={{marginRight:"15%"}} className="editButton"> 
            Edit Flower
        </button>

        </Link>
        <Link to={`/flowers`}>
            <button onClickCapture={() => handleDelete()} className="editButton">{"Delete 😢"}</button>
        </Link>

      </div>
    </div>
  );
}

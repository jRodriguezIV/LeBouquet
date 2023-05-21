import { Link } from "react-router-dom";
import "./ShowFlower.css";

export default function ShowFlower({ flower }) {
  console.log(flower);

  return (
    <div key={flower.id} className="showFlowerContainer">
      <img className="flowerImage" src={flower.image} alt={flower.name} />

      <div className="flowerInfo">
        <p>
          <span className="spanLeft">Flower Name:</span>
          <span className="spanRight">{flower.name}</span>
        </p>
        <p>
          Flower Cost:&nbsp;
          <span className="spanRight">{`$${flower.cost}`}&nbsp;(each)</span>
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
        <Link to={`/flowers/${flower.id}/edit`}>
        <button className="editButton"> 
            Edit Flower
        </button>
        </Link>

      </div>
    </div>
  );
}

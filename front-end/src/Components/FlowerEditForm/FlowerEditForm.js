import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import './FlowerEditForm.css'

const API = process.env.REACT_APP_API_URL

export default function FlowerEditForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [flower, setFlower] = useState({
      name: "",
      color: "",
      cost: "",
      image: "",
      is_favorite: false,
      scientific_name: "",
      sunlight: "",
      watering: "",
    });
  
    useEffect(() => {
      axios
        .get(`${API}/flowers/${id}`)
        .then((response) => setFlower(response.data))
        .catch((e) => console.warn("catch", e));
    }, [id]);
  
    const handleTextChange = (event) => {
      setFlower({ ...flower, [event.target.id]: event.target.value });
    };
  
    const handleCheckboxChange = () => {
      setFlower({ ...flower, is_favorite: !flower.is_favorite });
    };
  
    const updateFlower = (updatedFlower) => {
      axios
        .put(`${API}/flowers/${id}`, updatedFlower)
        .then(
          () => {
            navigate(`/flowers/${id}`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      updateFlower(flower, id);
    };
  
    return (
      <div className="editContainer">
        <img src={flower.image} alt={flower.name} className="editImage" />
  
        <div className="editFormInfo">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Flower Name:
              &nbsp;<input
                id="name"
                type="text"
                value={flower.name}
                onChange={handleTextChange}
              />
            </label>
      <br />
            <label htmlFor="name">
              Flower Cost($):
              &nbsp;<input
                id="cost"
                type="text"
                value={flower.cost}
                onChange={handleTextChange}
              />
            </label>
            <br />
            <label htmlFor="name">
              Scientific Name:
              &nbsp;<input
                id="scientific_name"
                type="text"
                value={flower.scientific_name}
                onChange={handleTextChange}
              />
            </label>
            <br />
            <label htmlFor="name">
              Flower Color:
              &nbsp;<input
                id="color"
                type="text"
                value={flower.color}
                onChange={handleTextChange}
              />
            </label>
            <br />
            <label htmlFor="name">
              Sunlight Requirement:
              &nbsp;<input
                id="sunlight"
                type="text"
                value={flower.sunlight}
                onChange={handleTextChange}
              />
            </label>
            <br />
            <label htmlFor="name">
              Watering Requirement:
              &nbsp;<input
                id="watering"
                type="text"
                value={flower.watering}
                onChange={handleTextChange}
              />
            </label>
            <br />
            <label htmlFor="name">
              Favorite Flower?:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                id="is_favorite"
                type="checkbox"
                checked={flower.is_favorite}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => navigate(`/flowers/${id}`)}>Cancel</button>
          </form>
        </div>
      </div>
    );
}
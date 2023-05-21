import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const API = process.env.REACT_APP_API_URL


export default function FlowerNewform() {


    const navigate = useNavigate();
    let id  = ""
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
  
  
    const handleTextChange = (event) => {
      setFlower({ ...flower, [event.target.id]: event.target.value });
    };
  
    const handleCheckboxChange = () => {
      setFlower({ ...flower, is_favorite: !flower.is_favorite });
    };
  
    const addFlower = (newFlower) => {
        axios
        .post(`${API}/flowers`, newFlower )
        .then(response => id = response.data.id)
        .then(
            () => {
                navigate(`/flowers/${id}`)
            },
            (error) => console.error(error)
        )
        .catch(c => console.warn("catch", c))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addFlower(flower);
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
                placeholder="flower name"
                onChange={handleTextChange}
              />
            </label>
      <br />
            <label htmlFor="name">
              Flower Cost($):
              &nbsp;<input
                id="cost"
                type="text"
                placeholder="`$00`  no decimal" 
                value={flower.cost}
                onChange={handleTextChange}
              />
            </label>
            <br />
            <label htmlFor="name">
              Flower Image :
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                id="image"
                type="text"
                placeholder="URL"
                checked={flower.is_favorite}
                onChange={handleTextChange}
              />
            </label>
            <br />
            <label htmlFor="name">
              Scientific Name:
              &nbsp;<input
                id="scientific_name"
                type="text"
                placeholder="scientific name"
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
                placeholder="flower color"
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
                placeholder="sunlight"
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
                placeholder="watering"
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
            <button onClick={() => navigate(`/flowers`)}>Cancel</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
}
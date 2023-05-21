import "./CarouselComp.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { useNavigate } from "react-router-dom";

export default function CarouselComp({ flowerList }) {
  let navigate = useNavigate()

  const handleItemClick = (index, item) => {
    navigate(`/flowers/${item.key}`)
  }

  return (
    <Carousel autoFocus={true} showThumbs={false} infiniteLoop={true} onClickItem={(index, item) => handleItemClick(index, item)}>
        {flowerList.map((flower) => (
            <div key={flower.id}>
                <img src={flower.image} alt={flower.name} style={{minHeight:"auto"}}/>
                <p style={{fontSize:"larger"}} className="legend">Name:&nbsp;{flower.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Cost: $${flower.cost}`}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tap&nbsp;For&nbsp;Info</p>

            </div>
        ))}

    </Carousel>


    // <section className="carouselContainer">
    //   <div className="carousel">
    //     {flowerList.map((flower) => (

    //         <img src={flower.image} alt={flower.name} />

    //     ))}
    //   </div>
    // </section>
  );
}

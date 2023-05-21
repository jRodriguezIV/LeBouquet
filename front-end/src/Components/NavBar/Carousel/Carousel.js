import "./Carousel.css";

export default function Carousel({ flowerList }) {
  return (
    <section className="carouselContainer">
      <div className="carousel">
        {flowerList.map((flower) => (

            <img src={flower.image} alt={flower.name} />

        ))}
      </div>
    </section>
  );
}

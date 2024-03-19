import "./Testimonial.css"
function Testimonial({
    image,
    age,
    name,
    rating
}) {
    return (
<div className="testimonialcontainer">
    <h4 className="testimonialcontainerh4">{rating}</h4>
    <div className="testimonialcontainer2">
    <img className="testimonialjpg" src={image} alt="testimony giver" />
    <h4 className="testimonialcontainer2h4">{age}</h4>
    </div>

    <h4 className="testimonialcontainerh4">{name}</h4>
</div>
    );
}

export default Testimonial;
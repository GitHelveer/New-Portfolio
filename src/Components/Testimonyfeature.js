import Testimonial from "./Testimonial"
import testimonyjpg from "./Testimonial1.jpg"
import "./Testimonyfeature.css"
function Testimonyfeature(){
    return(
        <>
        <div>
        <h2 className="testimonialh2">Our Testimonials</h2>
        <div className="Testimonyfeaturecont">
        <Testimonial image={testimonyjpg} name="John" rating="8" age="27" />
        <Testimonial image={testimonyjpg} name="mathew" rating="7" age="35" />
        <Testimonial image={testimonyjpg} name="Emy" rating="9" age="28" />
        <Testimonial image={testimonyjpg} name="Lily" rating="10" age="24" />
        </div>
        </div>

        </>

    );
}
export default Testimonyfeature;
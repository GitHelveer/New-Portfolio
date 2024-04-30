import Testimonial from "./Testimonial"
import Johntest from "./Johntestimonial.jpg"
import Mattest from "./Matthew Testimony.jpg"
import emytest from "./Emytestimony.jpg"
import lilytest from "./lilytestim.jpg"
import "./Testimonyfeature.css"
function Testimonyfeature(){
    return(
        <>
        <div>
        <h2 className="testimonialh2">Our Testimonials</h2>
        <div className="Testimonyfeaturecont">
        <Testimonial image={Johntest} name="John" rating="Rating: 8" age="35 Yrs" />
        <Testimonial image={emytest} name="Emy" rating="Rating: 9" age="21 Yrs" />
        <Testimonial image={Mattest} name="Mathew" rating="Rating: 7" age="27 Yrs" />
        <Testimonial image={lilytest} name="Lily" rating="Rating: 10" age="24 Yrs" />
        </div>
        </div>

        </>

    );
}
export default Testimonyfeature;
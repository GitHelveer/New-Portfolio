import "./Featuring.css";
import featimg from "./featuringimage.jpg"
function Featuring() {
    return(
<article className="featuringcontainer">
    <section className="featcontainer1">
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    <p>the Best restaurant in the town with many delicious dishes and bla bla</p>
    </section>
    <section className="featcontainer2">
    <img src={featimg} alt="Featuring food" style={{ height: '40rem' }} />
    </section>

</article>
    );
}
export default Featuring;
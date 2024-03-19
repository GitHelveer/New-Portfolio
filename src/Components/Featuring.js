import "./Featuring.css";
import featimg from "./featuringimage.jpg"
import Button from "./Button";
function Featuring() {
    return(
        <>
        <article className="featuringcontainer">
    <section className="featcontainer1">
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    <p>the Best restaurant in the town with many delicious dishes and bla bla</p>
    <div className="featuringbutton"><Button className="button" button="Reserve a Table"/></div>
    
    </section>
    <section className="featcontainer2">
    <img src={featimg} alt="Featuring food" />
    </section>
</article>
<section className="thismenubut">
<h2 className="hmenubut">This Week's Specials</h2>
<Button button="Online Menu" className="menubut" />
</section>
        </>



    );
}
export default Featuring;
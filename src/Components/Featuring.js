import "./Featuring.css";
import featimg from "./featuringimage.jpg";
import Button from "./Button";

function Featuring() {
  return (
    <>
      <article className="featuringcontainer">
        <section className="featcontainer1">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            The best restaurant in town with many delicious dishes and more.
          </p>
          <div className="featuringbutton">
            <Button linkto="/Booking">Reserve a Table</Button>
          </div>
        </section>
        <section className="featcontainer2">
          <img src={featimg} alt="Featuring food" />
        </section>
      </article>
      <section className="thismenubut">
        <h2 className="hmenubut">This Week's Specials</h2>
        <Button linkto="/Booking">Online Menu</Button>
      </section>
    </>
  );
}

export default Featuring;
import './Footer.css';
import footlogo from "./littlelemon.jpg"

function Footer() {
  return (
    <footer className='Footer'>
      <section className="footimg">
        <img src={footlogo} alt="Logo" />
      </section>
      <section className="footnavigation">
        <h3>Navigation</h3>
        <ul>
          <li><a href="https://www.credly.com/go/VjvM21UN">Home</a></li>
          <li><a href="https://www.credly.com/go/VjvM21UN">About</a></li>
          <li><a href="https://www.credly.com/go/VjvM21UN">Menu</a></li>
          <li><a href="https://www.credly.com/go/VjvM21UN">Reservations</a></li>
          <li><a href="https://www.credly.com/go/VjvM21UN">Contact Us</a></li>
        </ul>
      </section>
      <section className="footcontact">
        <h3>Contact</h3>
        <ul>
          <li><a href="https://www.credly.com/go/VjvM21UN">Address</a></li>
          <li><a href="https://www.credly.com/go/VjvM21UN">Email</a></li>
          <li><a href="https://www.credly.com/go/VjvM21UN">Telephone</a></li>
        </ul>
      </section>
      <section className="footsocialmedia">
        <h3>Socialmedia Links</h3>
        <ul>
          <li><a href="https://www.credly.com/go/VjvM21UN">Instagram</a></li>
          <li><a href="https://www.credly.com/go/VjvM21UN">Facebook</a></li>
          <li><a href="https://www.credly.com/go/VjvM21UN">Linkedin</a></li>
          <li><a href="https://www.credly.com/go/VjvM21UN">Twitter</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
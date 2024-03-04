import './Footer.css';

function Footer() {
  return (
    <footer>
      <section className="footimg">
        <img src="./logo512.png" alt="Logo" />
      </section>
      <section className="footnavigation">
        <h2>Navigation</h2>
        <ul>
          <li><a href="https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/7OkGV/recap-css-grids">Home</a></li>
          <li><a href="https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/7OkGV/recap-css-grids">About</a></li>
          <li><a href="https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/7OkGV/recap-css-grids">Menu</a></li>
          <li><a href="https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/7OkGV/recap-css-grids">Reservations</a></li>
          <li><a href="https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/7OkGV/recap-css-grids">Contact Us</a></li>
        </ul>
      </section>
      <section className="footcontact">
        <h2>Contact</h2>
        <ul>
          <li><a href="https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/7OkGV/recap-css-grids">Address</a></li>
          <li><a href="https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/7OkGV/recap-css-grids">Email</a></li>
          <li><a href="https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/7OkGV/recap-css-grids">Telephone</a></li>
        </ul>
      </section>
      <section className="footsocialmedia">
        <h2>Socialmedia Links</h2>
        <ul>
          <li><a href="https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/7OkGV/recap-css-grids">Instagram</a></li>
          <li><a href="https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/7OkGV/recap-css-grids">Facebook</a></li>
          <li><a href="https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/7OkGV/recap-css-grids">Linkedin</a></li>
          <li><a href="https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/7OkGV/recap-css-grids">Twitter</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
import './lastfeaturing.css';
import image1111 from "./Macaroni.jpg"
import image2222 from "./bruchetta.jpg"

function Lastfeaturing() {
  return (
    <>
      <div className="last-featuring-container">
        <div className='lastfeaturing1'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut gravida velit. Mauris eget neque sed nibh fringilla eleifend. Aliquam erat volutpat. Integer auctor scelerisque efficitur.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut gravida velit. Mauris eget neque sed nibh fringilla eleifend. Aliquam erat volutpat. Integer auctor scelerisque efficitur.
          </p>
        </div>
        <div className='lastfeaturing2'>
          <img className="image1111" src={image1111} alt="image1111" />
          <img className='image2222' src={image2222} alt="image2222" />
        </div>
      </div>
    </>
  );
}

export default Lastfeaturing;
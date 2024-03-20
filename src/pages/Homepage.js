import "../global.css"
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Main from '../Components/Main';
import Testimonyfeature from "../Components/Testimonyfeature";
import Lastfeaturing from "../Components/Lastfeaturing";

function Homepage(){
    return(
            <>
<Header  />
<Main />
<Testimonyfeature />
<Lastfeaturing />
<Footer />
    </>

    );
}
export default Homepage;
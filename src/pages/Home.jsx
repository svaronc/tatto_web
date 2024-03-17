import "../styles/Home.css";
import Tatto from "../assets/Tattoo.png";

const Home = () => {
  return (
    <div className="mt-10">
       <div className="background_image">
        <img src={Tatto} alt="Fondo" className="image_back" />
    </div>
    <img src="https://eta3n9bentg.exactdn.com/wp-content/uploads/2024/02/Tattoo-art-conflict-faded-1.png?strip=all&lossy=1&ssl=1" alt="Perfil" className="perfil"/> 
    </div>
   
  );
};

export default Home;

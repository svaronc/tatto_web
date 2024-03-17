import "../styles/Home.css";
import Tatto from "../assets/Tattoo.png";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";


const Home = () => {
  return (
    <div className="mt-10 relative">
       <div className="background_image">
        <img src={Tatto} alt="Fondo" className="image_back" />
    </div>
    <img src="https://eta3n9bentg.exactdn.com/wp-content/uploads/2024/02/Tattoo-art-conflict-faded-1.png?strip=all&lossy=1&ssl=1" alt="Perfil" className="perfil"/> 
    <div className="bg-black text-white h-96 flex flex-col items-center justify-center">
      <p>
        Tattos that surpass expectations
      </p>
      <div className="flex gap-5">
      <MdFacebook className=" h-9 w-9 mt-5"/>
      <FaInstagram className=" h-9 w-9 mt-5"/>
      </div>
      <p>------------------------------------------------------------------------------</p>
      <p>Copyrigth © 2023 Svaronc and JPRuedaZ</p>
    </div>
    </div>
   
  );
};

export default Home;

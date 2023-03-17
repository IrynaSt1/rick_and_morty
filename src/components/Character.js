import { Link } from "react-router-dom";
import './Character.css'
const Character = ({ id, name, image, species }) => {
  return (
    <div className="character">
      <Link className="link" to={`/characters/${id}`}>
        <div className="hero_image">
          <img src={image} alt={name} />
        </div>
        <div className="headline">
          <h3>{name}</h3>
          <h4>{species}</h4>
        </div>
      </Link>
    </div>
  );
};
export default Character;

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import "./SingleCharacter.css";
import arrow from "../assets/icon/navigation/arrow_back_24px.svg";

const url = "https://rickandmortyapi.com/api/character/";

const SingleCharacter = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCharacter() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data) {
          setCharacter(data);
        } else {
          setCharacter(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCharacter();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!character) {
    return <h2>no character to display</h2>;
  }
  const { name, image, gender, status, origin, species, type } = character;
  return (
    <div className="single_character">
      <Link className="goBack" to="/">
        <img src={arrow} alt="arrow" />
        <span>GO BACK</span>
      </Link>
      <div className="character_detail">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h3>Informations</h3>
        <div className="info">
          <div>
            <h5>Gender</h5>
            <p>{gender}</p>
            <hr />
          </div>
          <div>
            <h5>Status</h5>
            <p>{status}</p>
            <hr />
          </div>
          <div>
            <h5>Specie</h5>
            <p>{species}</p>
            <hr />
          </div>
          <div>
            <h5>Origin</h5>
            <p>{origin.name}</p>
            <hr />
          </div>
          <div>
            <h5>Type</h5>
            {type.length > 0 ? <p>{type}</p> : <p>Unknown</p>}
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;

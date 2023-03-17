import { useGlobalContext } from "../context";
import Character from "./Character";
import Loading from "./Loading";
import './CharacterList.css'

const CharacterList = () => {
  const { characters, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (characters.length < 1) {
    return <div className="no_heros">No characters found</div>;
  }
  return (

      <div className="characters">
        {characters.map((item) => {
          return <Character key={item.id} {...item} />;
        })}
      </div>

  );
};

export default CharacterList;

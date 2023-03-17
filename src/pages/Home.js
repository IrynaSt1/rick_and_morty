import CharacterList from "../components/CharacterList";
import SearchForm from "../components/SearchForm";
import rickAndMorty from "../assets/rickAndMorty.svg";

const Home = () => {
  return (
    <div className="box">
    <main>
      <div className="image">
        <img src={rickAndMorty} alt="logo" />
      </div>
      <SearchForm />
      <CharacterList />
    </main>
    </div>
  );
};

export default Home;

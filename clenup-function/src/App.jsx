import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const controler = new AbortController();
    async function getcheng() {
      const results = await fetch( `https://rickandmortyapi.com/api/character/?name=${query}`);
      const data = await results.json();
      console.log(data);

      console.log(data.results);
    }
    getcheng();
    return () => controler.abort();
  }, [query]);

  const chengeH = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form action="">
      <input type="text" onChange={chengeH} value={query} />
    </form>
  );
}

export default App;

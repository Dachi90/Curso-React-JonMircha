import ConceptosBasicos from "./Components/ConceptosBasicos";
import CrudApi from "./Components/CrudApi";
import SongSearch from "./Components/SongSearch";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a href="http://reactrouter.com/web/guides/quick-start" target="_blank" rel="noreferrer">
        Documentación
      </a>
      <hr />
      <CrudApi />
      <hr />
      {/* <SongSearch />
      <hr /> */}
      {/* <ConceptosBasicos /> */}
    </div>
  );
}

export default App;

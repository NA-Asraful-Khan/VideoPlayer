import Video from "./Componants/Video";
import { useGlobalContext } from "./context/globalContext";


function App() {
  const g = useGlobalContext();
  return (
    <div className="App">
      <Video />
    </div>
  );
}

export default App;

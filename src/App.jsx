import Tours from "./components/Tours";
import data from "./data"
function App() {

  return (
    <div className="App">
      <Tours tours={data} />
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Topbar from "./components/Topbar";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <Topbar />
      <MyFooter />
    </div>
  );
}

export default App;

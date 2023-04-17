import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Topbar from "./components/Topbar";
import MyFooter from "./components/MyFooter";
import HeaderProfile from "./components/HeaderProfile";
import ProfileMainPage from "./components/ProfileMainPage";

function App() {
  return (
    <div className="App">
      <Topbar />
      <ProfileMainPage />
      <MyFooter />
    </div>
  );
}

export default App;

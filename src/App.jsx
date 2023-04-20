import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfileMainPage from "./components/ProfileMainPage";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import JobsPage from "./components/JobsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/" element={<ProfileMainPage />} />
        <Route path="/jobs/" element={<JobsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

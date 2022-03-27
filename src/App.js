import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Index";
import { HomePage, SingeVideoPage, VideoListingPage } from "./Pages/Index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video-listing-page" element={<VideoListingPage />} />
        <Route
          path="/video-listing-page/:videoId"
          element={<SingeVideoPage />}
        />
      </Routes>
    </div>
  );
}

export default App;

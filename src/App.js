import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Index";
import {
  HomePage,
  LikedVideosPage,
  PlayListPage,
  SingeVideoPage,
  VideoListingPage,
  WatchLaterPage,
  HistoryPage,
} from "./Pages/Index";
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
        <Route path="/watch-later" element={<WatchLaterPage />} />
        <Route path="/liked-videos" element={<LikedVideosPage />} />
        <Route path="/playlists" element={<PlayListPage />}></Route>
        <Route path="/history-videos" element={<HistoryPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

import { Navbar, RequiresAuth, Sidebar } from "./Components/Index";
import {
  HomePage,
  LikedVideosPage,
  PlayListPage,
  SingeVideoPage,
  VideoListingPage,
  WatchLaterPage,
  HistoryPage,
  LoginPage,
  SignUpPage,
} from "./Pages/Index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video-listing-page" element={<VideoListingPage />} />
        <Route
          path="/video-listing-page/:videoId"
          element={<SingeVideoPage />}
        />
        <Route
          path="/watch-later"
          element={
            <RequiresAuth>
              <WatchLaterPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/liked-videos"
          element={
            <RequiresAuth>
              <LikedVideosPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/playlists"
          element={
            <RequiresAuth>
              <PlayListPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/history-videos"
          element={
            <RequiresAuth>
              <HistoryPage />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "toast",
          duration: 2000,
        }}
      />
    </div>
  );
}

export default App;

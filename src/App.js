import "./App.css";
import { Navbar, Footer } from "./Components/Index";
import { HomePage } from "./Pages/Index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

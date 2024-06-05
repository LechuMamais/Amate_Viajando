import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Destinations from "./pages/Destinations/Destinations";
import Destination from "./pages/Destination/Destination";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:destination_id" element={<Destination />} />
          <Route path="*" element={<Home />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

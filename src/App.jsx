import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Destinations from "./pages/Destinations/Destinations";
import Destination from "./pages/Destination/Destination";
import Tour from "./pages/Tour/Tour";
import Tours from "./pages/Tours/Tours";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:destination_id" element={<Destination />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:tour_id" element={<Tour />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

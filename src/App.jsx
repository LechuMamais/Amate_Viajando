import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Destinations from "./pages/Destinations/Destinations";
import Destination from "./pages/Destination/Destination";
import Tour from "./pages/Tour/Tour";
import Tours from "./pages/Tours/Tours";
import { DestinationProvider } from "./providers/DestinationProvider";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:destination_id" element={<DestinationProvider><Destination/></DestinationProvider>} />
        <Route path="/destinations/:destination_id/tours" element={<DestinationProvider><Tours /></DestinationProvider>} />
        <Route path="/destinations/:destination_id/tours/:tour_id" element={<DestinationProvider><Tour /></DestinationProvider>} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

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
import Logout from "./components/Logout/Logout";
import Profile from "./pages/Profile/Profile";
import CreateTour from "./components/CreateTour/CreateTour";
import CreateDestination from "./components/CreateDestination/CreateDestination";
import UpdateDestination from "./components/UpdateDestination/UpdateDestination";
import UpdateTour from "./components/UpdateTour/UpdateTour";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:destination_id" element={<DestinationProvider><Destination/></DestinationProvider>} />
        <Route path="/destinations/:destination_id/tours" element={<DestinationProvider><Tours /></DestinationProvider>} />
        <Route path="/destinations/:destination_id/tours/:tour_id" element={<DestinationProvider><Tour /></DestinationProvider>} />

        <Route path="/create-tour" element={<CreateTour />} />
        <Route path="/create-destination" element={<CreateDestination />} />
        <Route path="/update-destination/:destination_id" element={<UpdateDestination />} />
        <Route path="/update-tour/:tour_id" element={<UpdateTour />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

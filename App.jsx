import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import RoomCategories from "./pages/RoomCategories";
import Bookings from "./pages/Bookings";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useHotel } from "./context/HotelContext";

export default function App() {
  const { state, dispatch } = useHotel();

  return (
    <div className={`app ${state.theme}`}>
      <Navbar />

      <button
        className="theme-toggle"
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      >
        {state.theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/rooms" element={<Rooms />}>
            <Route index element={<RoomCategories />} />
            <Route path="categories" element={<RoomCategories />} />
            <Route path=":id" element={<RoomDetails />} />
          </Route>

          <Route path="/bookings" element={<Bookings />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="*"
            element={
              <section className="section">
                <h1>404 - Page Not Found</h1>
                <p>The page you requested does not exist.</p>
              </section>
            }
          />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2026 StayEase Hotel Management. All rights reserved.</p>
      </footer>
    </div>
  );
}
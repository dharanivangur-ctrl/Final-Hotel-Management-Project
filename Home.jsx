import { Link } from "react-router-dom";
import RoomCard from "../components/RoomCard";

const featuredRooms = [
  {
    id: 1,
    name: "Deluxe Room",
    type: "Popular",
    price: 3500,
    description: "A comfortable room for a relaxing stay.",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
  },
  {
    id: 2,
    name: "Luxury Suite",
    type: "Premium",
    price: 6500,
    description: "Spacious accommodation with elegant interiors.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
  },
  {
    id: 3,
    name: "Standard Room",
    type: "Affordable",
    price: 2200,
    description: "A simple and peaceful room for every traveler.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">WELCOME TO STAYEASE</span>
          <h1>Your perfect stay starts here.</h1>
          <p>
            Discover comfortable rooms, exceptional hospitality,
            and memorable experiences.
          </p>
          <Link to="/rooms" className="btn">
            Explore Rooms →
          </Link>
        </div>
      </section>

      <section className="stats">
        <div><strong>50+</strong><span>Luxury Rooms</span></div>
        <div><strong>1,200+</strong><span>Happy Guests</span></div>
        <div><strong>24/7</strong><span>Guest Support</span></div>
        <div><strong>4.8/5</strong><span>Guest Rating</span></div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">OUR ACCOMMODATION</span>
            <h2>Rooms made for you</h2>
            <p>Choose the perfect room for your next trip.</p>
          </div>
          <Link to="/rooms" className="text-link">View all rooms →</Link>
        </div>

        <div className="room-grid">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Planning your next getaway?</h2>
        <p>Explore our rooms and create your next memorable stay.</p>
        <Link to="/bookings" className="btn">Book Your Stay</Link>
      </section>
    </>
  );
}
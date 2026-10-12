import { Link, useParams } from "react-router-dom";
import { roomsData } from "./Rooms";

export default function RoomDetails() {
  const { id } = useParams();

  const room = roomsData.find((item) => item.id === Number(id));

  if (!room) {
    return (
      <div className="empty-state">
        <h2>Room Not Found</h2>
        <Link to="/rooms" className="btn">Back to Rooms</Link>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="details-layout">
        <img src={room.image} alt={room.name} />

        <div>
          <span className="eyebrow">{room.type} ACCOMMODATION</span>
          <h1>{room.name}</h1>
          <p>{room.description}</p>
          <h2>₹{room.price.toLocaleString("en-IN")} / night</h2>
          <p>Enjoy comfortable accommodation and attentive service.</p>
          <Link to="/bookings" className="btn">Book This Room</Link>
          {" "}
          <Link to="/rooms" className="btn btn-outline">
            Back to Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
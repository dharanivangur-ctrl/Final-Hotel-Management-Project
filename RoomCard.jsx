import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
  return (
    <article className="room-card">
      <img src={room.image} alt={room.name} />

      <div className="room-info">
        <span className="room-type">{room.type}</span>
        <h3>{room.name}</h3>
        <p>{room.description}</p>

        <div className="room-bottom">
          <div>
            <strong>₹{room.price.toLocaleString("en-IN")}</strong>
            <span> / night</span>
          </div>

          <Link to={`/rooms/${room.id}`} className="btn btn-small">
            View Room
          </Link>
        </div>
      </div>
    </article>
  );
}
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBooking,
  updateBooking,
  deleteBooking,
} from "../features/bookingsSlice";
import useFetchData from "../hooks/useFetchData";
import { roomsData } from "./Rooms";

const today = new Date().toISOString().split("T")[0];

export default function Bookings() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.items);

  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    roomId: "1",
    checkIn: "",
    checkOut: "",
    guests: "1",
  });

  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ||
      !form.checkIn ||
      !form.checkOut
    ) {
      setMessage("Please enter valid details in all required fields.");
      return;
    }

    if (form.checkIn < today || form.checkOut <= form.checkIn) {
      setMessage("Select a valid future check-in and check-out date.");
      return;
    }

    const booking = {
      ...form,
      roomId: Number(form.roomId),
      guests: Number(form.guests),
    };

    if (editingId !== null) {
      dispatch(updateBooking({ ...booking, id: editingId }));
      setMessage("Booking updated successfully.");
    } else {
      dispatch(addBooking(booking));
      setMessage("Booking added successfully.");
    }

    setEditingId(null);
    setForm({
      name: "",
      email: "",
      roomId: "1",
      checkIn: "",
      checkOut: "",
      guests: "1",
    });
  }

  function editBooking(booking) {
    setForm({
      name: booking.name,
      email: booking.email,
      roomId: String(booking.roomId),
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      guests: String(booking.guests),
    });

    setEditingId(booking.id);
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="section">
      <span className="eyebrow">RESERVATION MANAGEMENT</span>
      <h1>Manage Your Bookings</h1>
      <p>Create and manage hotel reservations using this demo form.</p>

      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>{editingId !== null ? "Edit Booking" : "New Booking"}</h2>

        <div className="form-grid">
          <label>
            Full Name *
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
              minLength={2}
            />
          </label>

          <label>
            Email *
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
            />
          </label>

          <label>
            Room *
            <select
              name="roomId"
              value={form.roomId}
              onChange={handleChange}
            >
              {roomsData.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name} — ₹{room.price}/night
                </option>
              ))}
            </select>
          </label>

          <label>
            Number of Guests *
            <input
              type="number"
              name="guests"
              min="1"
              max="10"
              value={form.guests}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Check-in *
            <input
              type="date"
              name="checkIn"
              min={today}
              value={form.checkIn}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Check-out *
            <input
              type="date"
              name="checkOut"
              min={form.checkIn || today}
              value={form.checkOut}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        {message && <p className="form-message" role="status">{message}</p>}

        <div className="button-row">
          <button type="submit" className="btn">
            {editingId !== null ? "Update Booking" : "Add Booking"}
          </button>

          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setEditingId(null);
              setMessage("");
              setForm({
                name: "",
                email: "",
                roomId: "1",
                checkIn: "",
                checkOut: "",
                guests: "1",
              });
            }}
          >
            Reset Form
          </button>
        </div>
      </form>

      <div className="section-heading">
        <h2>Current Bookings ({bookings.length})</h2>
      </div>

      {bookings.length === 0 ? (
        <div className="empty-state">
          <h3>No bookings yet</h3>
          <p>Add your first booking using the form above.</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Guest</th>
                <th>Room</th>
                <th>Dates</th>
                <th>Guests</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => {
                const room = roomsData.find(
                  (item) => item.id === booking.roomId
                );

                return (
                  <tr key={booking.id}>
                    <td>
                      <strong>{booking.name}</strong>
                      <br />
                      <span>{booking.email}</span>
                    </td>
                    <td>{room?.name || "Unknown Room"}</td>
                    <td>
                      {booking.checkIn}
                      <br />to {booking.checkOut}
                    </td>
                    <td>{booking.guests}</td>
                    <td>
                      <div className="button-row">
                        <button
                          className="btn btn-small"
                          onClick={() => editBooking(booking)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-small btn-danger"
                          onClick={() => {
                            dispatch(deleteBooking(booking.id));
                            if (editingId === booking.id) {
                              setEditingId(null);
                            }
                            setMessage("Booking deleted.");
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="api-panel">
        <h2>API Integration Demo</h2>
        <p>Sample guest data loaded from JSONPlaceholder.</p>

        {loading && <p>Loading guest data...</p>}
        {error && <p className="form-message">{error}</p>}

        {!loading && !error && (
          <p>Successfully loaded {data.length} sample guest records.</p>
        )}
      </div>
    </section>
  );
}
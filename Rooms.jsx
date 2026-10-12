import { useMemo, useRef, useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import RoomCard from "../components/RoomCard";

export const roomsData = [
  {
    id: 1,
    name: "Deluxe Room",
    type: "Deluxe",
    price: 3500,
    description: "Comfortable room with a beautiful interior.",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
  },
  {
    id: 2,
    name: "Luxury Suite",
    type: "Suite",
    price: 6500,
    description: "Premium suite with spacious living space.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
  },
  {
    id: 3,
    name: "Standard Room",
    type: "Standard",
    price: 2200,
    description: "Affordable room for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
  },
  {
    id: 4,
    name: "Family Room",
    type: "Family",
    price: 4800,
    description: "Extra space for families and small groups.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
  },
  {
    id: 5,
    name: "Executive Suite",
    type: "Suite",
    price: 7500,
    description: "Elegant interiors for a premium experience.",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
  },
  {
    id: 6,
    name: "Garden Room",
    type: "Deluxe",
    price: 4000,
    description: "A relaxing room inspired by nature.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
  },
];

export default function Rooms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchRef = useRef(null);

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );
  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [page, setPage] = useState(1);

  const perPage = 3;

  const filteredRooms = useMemo(() => {
    return roomsData.filter((room) => {
      const matchesSearch = room.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesCategory =
        category === "All" || room.type === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filteredRooms.length / perPage);
  const currentPage = Math.min(page, Math.max(totalPages, 1));

  const visibleRooms = filteredRooms.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  function applyFilters() {
    setPage(1);
    setSearchParams({
      ...(search.trim() ? { search: search.trim() } : {}),
      ...(category !== "All" ? { category } : {}),
    });
  }

  return (
    <section className="section">
      <span className="eyebrow">FIND YOUR SPACE</span>
      <h1>Explore Our Rooms</h1>
      <p>Choose from our collection of comfortable accommodations.</p>

      <div className="filter-bar">
        <input
          ref={searchRef}
          value={search}
          placeholder="Search room name..."
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") applyFilters();
          }}
        />

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
        >
          <option value="All">All categories</option>
          <option value="Standard">Standard</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Suite">Suite</option>
          <option value="Family">Family</option>
        </select>

        <button className="btn" onClick={applyFilters}>
          Search
        </button>

        <button
          className="btn btn-outline"
          onClick={() => searchRef.current?.focus()}
        >
          Focus Search
        </button>
      </div>

      <p className="result-count">
        {filteredRooms.length} room(s) found
      </p>

      {filteredRooms.length === 0 ? (
        <div className="empty-state">
          <h3>No rooms found</h3>
          <p>Try a different search or category.</p>
          <button
            className="btn"
            onClick={() => {
              setSearch("");
              setCategory("All");
              setPage(1);
              setSearchParams({});
            }}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <>
          <div className="room-grid">
            {visibleRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="pagination">
            <button
              className="btn btn-outline"
              disabled={currentPage === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              Previous
            </button>

            <span>Page {currentPage} of {totalPages}</span>

            <button
              className="btn btn-outline"
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}

      <div className="nested-links">
        <Link to="/rooms/categories" className="text-link">
          Browse room categories →
        </Link>
      </div>

      <Outlet />
    </section>
  );
}
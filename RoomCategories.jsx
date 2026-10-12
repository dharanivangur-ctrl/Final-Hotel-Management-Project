import { Link } from "react-router-dom";

const categories = [
  { name: "Standard", description: "Affordable comfort for solo travelers." },
  { name: "Deluxe", description: "More space and upgraded amenities." },
  { name: "Suite", description: "Premium rooms with extra living space." },
  { name: "Family", description: "Comfortable accommodation for families." },
];

export default function RoomCategories() {
  return (
    <div className="category-section">
      <h2>Room Categories</h2>

      <div className="category-grid">
        {categories.map((category) => (
          <article className="category-card" key={category.name}>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <Link
              to={`/rooms?category=${category.name}`}
              className="text-link"
            >
              Explore {category.name} →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
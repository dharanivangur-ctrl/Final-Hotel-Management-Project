export default function About() {
  return (
    <section className="section">
      <span className="eyebrow">OUR STORY</span>
      <h1>About StayEase</h1>

      <div className="about-layout">
        <img
          className="about-image"
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000"
          alt="Hotel exterior and swimming pool"
        />

        <div>
          <h2>Hospitality that feels like home</h2>
          <p>
            StayEase is a hotel management demonstration project
            designed to make discovering rooms and managing bookings easy.
          </p>
          <p>
            Our sample hotel offers comfortable accommodation,
            friendly guest support, dining facilities, and event spaces.
          </p>

          <h3>Our facilities</h3>
          <ul className="feature-list">
            <li>Comfortable and clean rooms</li>
            <li>Restaurant and room service</li>
            <li>Free Wi-Fi in common areas</li>
            <li>24-hour guest assistance</li>
            <li>Conference and event facilities</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
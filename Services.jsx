const services = [
  {
    icon: "🛎️",
    title: "24/7 Reception",
    description: "Assistance with check-in, check-out, and guest requests.",
  },
  {
    icon: "🍽️",
    title: "Restaurant",
    description: "Enjoy a variety of delicious meals and refreshments.",
  },
  {
    icon: "🧹",
    title: "Housekeeping",
    description: "Clean and comfortable rooms throughout your stay.",
  },
  {
    icon: "📶",
    title: "Free Wi-Fi",
    description: "Stay connected with internet access in common areas.",
  },
  {
    icon: "🏊",
    title: "Swimming Pool",
    description: "Relax and unwind in our sample hotel leisure facilities.",
  },
  {
    icon: "🎉",
    title: "Event Spaces",
    description: "Spaces for meetings, celebrations, and special occasions.",
  },
];

export default function Services() {
  return (
    <section className="section">
      <span className="eyebrow">MADE FOR YOUR COMFORT</span>
      <h1>Our Services</h1>
      <p>Explore the facilities offered in our hotel demonstration.</p>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
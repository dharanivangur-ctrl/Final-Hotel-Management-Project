import { useRef, useState } from "react";

export default function Contact() {
  const nameRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (form.message.trim().length < 10) {
      alert("Please enter a message with at least 10 characters.");
      return;
    }

    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <section className="section">
      <span className="eyebrow">GET IN TOUCH</span>
      <h1>Contact Us</h1>
      <p>Have a question? Send us a message using the form below.</p>

      <div className="contact-layout">
        <div className="contact-info">
          <h2>We are here to help</h2>
          <p>📍 Hyderabad, Telangana, India</p>
          <p>✉️ support@stayease.example</p>
          <p>☎️ +91 90000 00000</p>
          <p>🕒 Guest support: 24/7 (sample information)</p>
        </div>

        <form
          className="booking-form"
          onSubmit={handleSubmit}
          onReset={() => setSubmitted(false)}
        >
          <label>
            Full Name *
            <input
              ref={nameRef}
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              placeholder="Your name"
              required
              minLength={2}
            />
          </label>

          <label>
            Email *
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Subject *
            <input
              value={form.subject}
              onChange={(e) =>
                setForm({ ...form, subject: e.target.value })
              }
              placeholder="How can we help?"
              required
            />
          </label>

          <label>
            Message *
            <textarea
              rows="5"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              placeholder="Write your message..."
              minLength={10}
              required
            />
          </label>

          {submitted && (
            <p className="success-message" role="status">
              Thank you! Your message passed validation.
              This demo does not send it to a server.
            </p>
          )}

          <div className="button-row">
            <button className="btn" type="submit">Send Message</button>
            <button
              className="btn btn-outline"
              type="button"
              onClick={() => nameRef.current?.focus()}
            >
              Focus Name
            </button>
            <button className="btn btn-outline" type="reset">
              Clear
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
import Layout from "../components/layout/Layout"

const Contact = () => {
  return (
    <Layout>
         <div className="lg:p-12 lg:pt-28 pt-28 px-2 lg:px-24">
      <section className="contact-section">
        <h1 className="contact-title text-2xl">Contact Us</h1>
        <p className="contact-description">
          We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
        </p>
      </section>

      <section className="contact-info-section">
        <h2 className="section-title text-2xl">Contact Information</h2>
        <p className="contact-info">
          <strong>Email:</strong> [Your Email Address]
        </p>
        <p className="contact-info">
          <strong>Phone:</strong> [Your Phone Number]
        </p>
      </section>

      <section className="social-media-section">
        <h2 className="section-title text-2xl">Connect with Us on Social Media</h2>
        <p className="social-media-info">
          Follow us on [Social Media Platform] to stay updated on the latest arrivals, promotions, and fashion inspiration.
        </p>
        {/* Add links to your social media profiles */}
      </section>

      <section className="business-hours-section">
        <h2 className="section-title text-2xl">Business Hours</h2>
        <p className="business-hours-info">
          Our team is available to assist you during the following hours:
        </p>
        <ul className="business-hours-list">
          <li>Monday to Friday: [Opening Hours]</li>
          <li>Saturday: [Opening Hours]</li>
          <li>Sunday: [Opening Hours]</li>
        </ul>
      </section>

      <section className="location-section">
        <h2 className="section-title text-2xl">Visit Our Store</h2>
        <p className="location-info">
          Stop by our physical store to explore our collection in person:
        </p>
        <p className="location-address">
          [Your Store Name]
          <br />
          [Street Address]
          <br />
          [City, State, Zip Code]
        </p>
      </section>
    </div>
    </Layout>
  )
}

export default Contact

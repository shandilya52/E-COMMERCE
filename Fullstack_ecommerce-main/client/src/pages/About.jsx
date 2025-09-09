import Layout from "../components/layout/Layout"


const About = () => {
  return (
    <Layout>
 <div  className="lg:p-12 lg:pt-28 pt-28 px-2 lg:px-24">
      <section className="about-section">
        <h1 className="about-title text-2xl">About Our Store</h1>
        <p className="about-description">
          Welcome to [Your Store Name], your ultimate destination for the latest fashion trends and high-quality clothing. Established with a passion for style and a commitment to customer satisfaction, [Your Store Name] is where fashion meets individuality.
        </p>
      </section>

      <section className="mission-section">
        <h2 className="section-title text-2xl">Our Mission</h2>
        <p className="about-mission">
          At [Your Store Name], we are on a mission to redefine the way you experience fashion. We strive to empower you with a diverse range of clothing that not only enhances your personal style but also boosts your confidence. Our curated collection reflects the latest trends while maintaining a timeless appeal.
        </p>
      </section>

      <section className="values-section">
        <h2 className="section-title text-2xl">Our Values</h2>
        <p className="about-values">
          Our core values center around authenticity, inclusivity, and sustainability. We believe in offering clothing that celebrates diversity and encourages self-expression. [Your Store Name] is committed to ethical practices, ensuring that our fashion-forward choices contribute to a positive impact on the environment.
        </p>
      </section>

      <section className="team-section ">
        <h2 className="section-title text-2xl">Meet Our Team</h2>
        <p className="about-team">
          Behind [Your Store Name] is a team of dedicated individuals who share a common passion for fashion. From our stylists and designers to our customer support team, each member plays a vital role in bringing you an unparalleled shopping experience. Get to know the faces behind the scenes as we work tirelessly to inspire your wardrobe.
        </p>
      </section>

      <section className="contact-section">
        <h2 className="section-title text-2xl">Contact Us</h2>
        <p className="about-contact">
          Have questions or suggestions? We would love to hear from you! Contact our friendly customer support team at [your email address] or call us at [your phone number]. Your feedback is invaluable as we continue to grow and enhance your shopping journey with [Your Store Name].
        </p>
      </section>
    </div>
    </Layout>
  )
}

export default About

import Feature from "../pages/Feature";

function About() {
  return (
    <section className="about_us pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="about-sec p-lg-5 p-3">
              <h2 className="fw-bold mb-4">Who we are</h2>
              <p className="text-muted">
                At Valour Wealth, we streamline your path to financial freedom
                by combining institutional-grade insights with personalized
                support. Our team builds genuine partnerships with each member,
                empowering you to approach the markets boldly. We design both
                short- and long-term strategies to help you and your family
                achieve sustainable growth.
              </p>
              <button className="theme_btn btn-outline-dark mt-4 px-4 py-2">
                <a className="chat" href="mailto:Contact@valourwealth.com">
                  Chat Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Feature />
    </section>
  );
}

export default About;

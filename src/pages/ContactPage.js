import Contact from "../components/Contact";
import React from "react";
import Layout from "../components/layout";

function ContactPage() {
  return (
    <section className="contact_us p-0">
      <Layout>
        <Contact />
      </Layout>
    </section>
  );
}

export default ContactPage;

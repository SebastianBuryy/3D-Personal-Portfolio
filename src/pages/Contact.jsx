import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_6rlqlc9",
        "template_cmpxggr",
        {
          from_name: form.name,
          to_name: "Sebastian",
          from_email: form.email,
          to_email: "sebastianbury2004@gmail.com",
          message: form.message,
        },
        "JSY_2KyfrG-_vJLIj"
      );

      setLoading(false);

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);

      console.log(error);

      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="c-space my-20">
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 w-full h-full object-center object-contain hidden md:block"
        />
        <div className="contact-container">
          <h3 className="head-text">Get in touch</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website or bring a unique
            project to life, I'm always here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Mark Zuckerberg"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="example@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hey, let's work together..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

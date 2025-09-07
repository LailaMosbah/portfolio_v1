import React, { useRef, useState } from "react";
import "./contact.css";
import { SocialIcon } from "react-social-icons";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";

export default function Contact() {
  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gcfxv7l", "template_hf9g7wf", form.current, {
        publicKey: "hab74yyQUVd2GMjdJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage("Message sent successfully!");
          setOpen(true);
          e.target.reset();
        },
        (error) => {
          setMessage("Failed to send the message, please try again.");
          setOpen(true);
          console.log("FAILED...", error.text);
        }
      );
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <section className="contactSection" id="contacts">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Name" name="name" />
          <input type="email" placeholder="Your Email" name="email" />
          <textarea
            placeholder="Your Message"
            required
            name="message"
          ></textarea>
          <button type="submit">Send Message</button>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message={message}
          />
        </form>
        <div className="links">
          <SocialIcon url="https://www.facebook.com/lyly.msbah.1599" />
          <SocialIcon url="www.linkedin.com/in/lailaomsbah1313" />
          <SocialIcon url="https://github.com/LailaMosbah" />
        </div>
      </section>
    </>
  );
}

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import appStyles from '../../App.module.css';
import styles from './Contact.module.css';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setError('');
    setSent(false);

    emailjs.sendForm(
      'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
      form.current,
      'YOUR_USER_ID'          // Replace with your EmailJS user/public key
    )
    .then(() => {
      setSent(true);
      form.current.reset();
    }, (err) => {
      setError('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact" className={appStyles.sectionWrapper}>
      <h1 className={styles.title}>Contact Me</h1>
      <hr className={styles.hr} />
      <div className={styles.contactGrid}>
        <div className={styles.info}>
          <h2>Get in touch</h2>
          <p>
            <strong>Email:</strong> <a href="mailto:nidhi2910patel@gmail.com">nidhi2910patel@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong> +1 (226)-206-2910
          </p>
          <p>
            Feel free to reach out for opportunities, collaborations, or just to connect!
          </p>
        </div>
        <form ref={form} className={styles.form} onSubmit={sendEmail}>
          <div className={styles.row}>
            <input type="text" name="user_name" placeholder="Name" required />
            <input type="email" name="user_email" placeholder="Email" required />
          </div>
          <textarea name="message" placeholder="Message" rows={5} required />
          <button type="submit">Send Message</button>
          {sent && <div style={{ color: "#a084e8", marginTop: "1rem" }}>Message sent!</div>}
          {error && <div style={{ color: "red", marginTop: "1rem" }}>{error}</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
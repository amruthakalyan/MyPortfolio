import React, { useState } from 'react';
import api from '../api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/contact', form);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={submit} className="contact-form">
        <input
          name="name"
          value={form.name}
          onChange={handle}
          placeholder="Your name"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handle}
          placeholder="Your email"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handle}
          placeholder="Message"
          required
        />
        <button type="submit">Send</button>
      </form>

      {status === 'sent' && (
        <p className="success">Thanks — I’ll get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="error">Something went wrong. Please try again.</p>
      )}
    </section>
  );
}

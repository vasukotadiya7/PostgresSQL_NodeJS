
import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main>
      <section id="home">
        <h1>Welcome to Silencio</h1>
        <p>Experience the best events in town.</p>
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p>Silencio is a unique venue offering an unparalleled nightlife experience.</p>
      </section>
      <section id="events">
        <h2>Upcoming Events</h2>
        <p>Check out our upcoming events and join the fun!</p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default Main;

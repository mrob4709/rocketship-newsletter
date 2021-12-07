import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <Head>
        <title>RocketShip Newsletter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form
        className="form"
        name="rocketshipform"
        action="/success"
        method="POST"
        data-netlify="true"
      >
        <input
          className="form-field"
          type="hidden"
          name="form-name"
          value="contact"
        />
        <p>
          <label htmlFor="yourname">Your Name:</label>
          <input className="form-field" type="text" name="name" id="yourname" />
        </p>
        <p>
          <label htmlFor="youremail">Your Email: </label>{" "}
          <input
            className="form-field"
            type="email"
            name="email"
            id="youremail"
          />
        </p>
        <p>
          <label htmlFor="yourmessage">Message: </label>
          <input
            className="form-field"
            type="text"
            name="message"
            id="yourmessage"
          ></input>
        </p>
        <p>
          <button className="submit-btn" type="submit">
            Send
          </button>
        </p>
      </form>
    </div>
  );
}

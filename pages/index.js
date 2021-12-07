import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form className="form" netlify>
        <h1>Sign up to our newsletter</h1>
        <input
          type="text"
          className="form-field"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          className="form-field"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <input
          type="email"
          className="form-field"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
}

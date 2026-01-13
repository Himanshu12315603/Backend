import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = () => {
    if (!name || !email) alert("All fields required");
    console.log(name, email);
  };

  return (
    <>
      <h2>Controlled Form</h2>
      <input onChange={l => setName(l.target.value)} placeholder="Name" />
      <input onChange={l => setEmail(l.target.value)} placeholder="Email" />
      <button onClick={submit}>Submit</button>
    </>
  );
}

export default ControlledForm;

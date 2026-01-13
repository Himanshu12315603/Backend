import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();

  const submit = () => {
    console.log(nameRef.current.value);
  };

  return (
    <>
      <h2>Uncontrolled Form</h2>
      <input ref={nameRef} />
      <button onClick={submit}>Submit</button>
    </>
  );
}

export default UncontrolledForm;

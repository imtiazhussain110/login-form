import { useState } from "react";
import "./App.css";

function App() {
  const initialValue = {
    fName: "",
    lName: "",
    email: "",
  };
  const [formInput, setFormInput] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    const name = e.target.name;

    if (name === "fName") {
      setFormInput({
        fName: newValue,
        lName: formInput.lName,
        email: formInput.email,
      });
    } else if (name === "lName") {
      setFormInput({
        fName: formInput.fName,
        lName: newValue,
        email: formInput.email,
      });
    } else {
      setFormInput({
        fName: formInput.fName,
        lName: formInput.lName,
        email: newValue,
      });
    }
  };

  const handleSubmit = (e) => {
    formInput.fName.length > 0 &&
    formInput.lName.length > 0 &&
    /\S+@\S+\.\S+/.test(formInput.email)
      ? alert(`Hello ${formInput.fName} ${formInput.lName}!`)
      : alert("Login Failed!");
    setFormInput(initialValue);
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <hr />
        <div className="fields">
          <input
            name="fName"
            type="text"
            placeholder="Enter your first name"
            onChange={handleChange}
            value={formInput.fName}
          />
          <input
            name="lName"
            type="text"
            placeholder="Enter your last name"
            onChange={handleChange}
            value={formInput.lName}
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            onChange={handleChange}
            value={formInput.email}
          />
        </div>
        <button className="submit-btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;

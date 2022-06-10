import React, { useState } from "react";


// followed the example on the learn platform
const MoreForm = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2) {
      setFirstNameError("First Name must be at least 2 characters!");
    } else {
      setFirstNameError("");
    }
    // this if statement is used to prevent the error message to pop up when the input field is cleared or empty
    if (e.target.value.length === 0) {
      setFirstNameError("");
    }
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameError("Last Name must be at least 2 characters!");
    } else {
      setLastNameError("");
    }
    if (e.target.value.length === 0) {
      setLastNameError("");
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 5) {
      setEmailError("Email must be at least 5 characters!");
    } else {
      setEmailError("");
    }
    if (e.target.value.length === 0) {
      setEmailError("");
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters!");
    } else {
      setPasswordError("");
    }
    if (e.target.value.length === 0) {
      setPasswordError("");
    }
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Passwords do not match!");
    } else {
      setConfirmPasswordError("");
    }
    if (e.target.value.length === 0) {
      setConfirmPasswordError("");
    }
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label> First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstName}
          />{" "}
          {/* onChange equals to the function that has the event*/}
          {firstNameError}{" "}
          {/*this will display an error message if target value does not satisfy the condition*/}
        </div>
        <br></br>
        <div>
          <label> Last Name: </label>
          <input type="text" value={lastName} onChange={handleLastName} />
          {lastNameError}
        </div>
        <br></br>
        <div>
          <label> Email: </label>
          <input type="email" value={email} onChange={handleEmail} />
          {emailError}
        </div>
        <br></br>
        <div>
          <label> Password: </label>
          <input type="password" value={password} onChange={handlePassword} />
          {passwordError}
        </div>
        <br></br>
        <div>
          <label> Confirm Password: </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
          {confirmPasswordError}
        </div>
        <br></br>
      </form>
    </>
  );
};

export default MoreForm;

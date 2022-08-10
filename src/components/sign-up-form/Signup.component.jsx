import React from "react";
import { useState } from "react";
import Button from "../button/Button.component";
import FormInput from "../form_input/FormInput.component";
import { SingUpWithEmailAndPassword } from "../util/firebase/firebase.utils";
import "./signup.styles.scss";
const formFeld = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Signup() {
  const [formData, setFormData] = useState(formFeld);
  const { displayName, email, password, confirmPassword } = formData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error("password not match ");
      return;
    }
    try {
      const response = await SingUpWithEmailAndPassword(email, password);
      alert("Account Created 😍");
      console.log(response);
      if (response) {
        setFormData(formFeld);
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This Email Already Used!! Try Another Email");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2> Don't have account ?</h2>
      <span> Sign up with Email And Password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button ButtonType="" type="submit">
          {" "}
          Sign Up{""}
        </Button>
      </form>
    </div>
  );
}

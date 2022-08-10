import React, { useContext } from "react";
import { useState } from "react";
import Button from "../button/Button.component";
import FormInput from "../form_input/FormInput.component";
import "./Login.styles.scss";
import { UserContext } from "../context/Context";
import {
  CreateDbDatafromAuth,
  signInWithGooglePopup,
  loginWithEmailAndPassword,
} from "../util/firebase/firebase.utils";

const formFeld = {
  email: "",
  password: "",
};

export default function Login() {
  const [formData, setFormData] = useState(formFeld);
  const { email, password } = formData;
  const { setUser } = useContext(UserContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await loginWithEmailAndPassword(email, password);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userRef = await CreateDbDatafromAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h1> Already have an account </h1>
      <h3> Login with Email and Password</h3>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit"> Sign in </Button>
          <Button onClick={signWithGoogle} ButtonType="google">
            Login with Google
          </Button>
        </div>
      </form>
    </div>
  );
}

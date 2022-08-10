import Signup from "../sign-up-form/Signup.component";
import Login from "../login/Login.component";
import "./SignIn.styles.scss";
import { useContext } from "react";
import { UserContext } from "../context/Context";
export default function SignIn() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="sign-container">
      <Login />
      <Signup />
    </div>
  );
}

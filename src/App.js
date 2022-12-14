import Home from "./components/routes/Home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/routes/Navigation/Navigation.component";
import SignIn from "./components/sign-in/SignIn.component";
import Shop from "./components/shop/Shop.component";
import Checkount from "./components/routes/checkout/Checkount.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<SignIn />} />
        <Route path="shop" element={<Shop />} />
        <Route path="checkout" element={<Checkount />} />
      </Route>
    </Routes>
  );
};

export default App;

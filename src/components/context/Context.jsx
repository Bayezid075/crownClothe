import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListner } from "../util/firebase/firebase.utils";
// this is store all the data
export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const value = { user, setUser };

  useEffect(() => {
    const unsubscriber = onAuthStateChangedListner((user) => {
      console.log(user);
    });
    return unsubscriber;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

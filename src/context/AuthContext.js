import { Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/config";
const spinnerStyle = {
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  witdth: "100vh",
};
export const AuthContext = React.createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, phoneNumber, photoURL, address } =
          user;
        setUser({ displayName, email, uid, phoneNumber, photoURL, address });
      }
      setIsLoading(false);
      history.push("/login");
    });

    return () => {
      unsubscribed();
    };
  }, [history]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? (
        <div style={spinnerStyle}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            color="red.500"
            width={50}
            height={50}
          />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

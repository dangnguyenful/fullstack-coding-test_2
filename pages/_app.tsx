import "../styles/globals.css";
import SignIn from "./sign-in";
import { UserContext } from "components/user";
import { useEffect, useState } from "react";

const MyApp = ({ Component, pageProps }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const authID = localStorage.getItem('authID');
    authID ? setUser(authID) : undefined;
  }, []);

  if (pageProps.protected && !user) {
    return (
      <SignIn />
    );
  }

  return (
    <UserContext.Provider value={user}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
};

export default MyApp;

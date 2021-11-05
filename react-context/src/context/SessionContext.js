import { createContext, useState } from "react";

const SessionContext = createContext();

const initialAuth = null;

const SessionProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  const data = { auth, handleAuth };

  return <SessionContext.Provider value={data}>{children}</SessionContext.Provider>;
};

export { SessionProvider };
export default SessionContext;

import { useState } from "react";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const initialAuth = null;

const MyPageContext = () => {
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  return (
    <div className="my-page">
      <LanguageProvider>
        <ThemeProvider>
          <HeaderContext handleAuth={handleAuth} auth={auth} />
          <MainContext auth={auth} />
          <FooterContext />
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
};

export default MyPageContext;

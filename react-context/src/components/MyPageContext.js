import { useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./Footer";
import HeaderContext from "./Header";
import MainContext from "./Main";

const initialLanguage = "es";
const initialAuth = null;

const translations = {
  es: {
    headerTitle: "Mi aplicación CON Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar sesión",
    buttonLogout: "Cerrar sesión",
    mainWelcome: "Bienvenido invitado",
    mainHello: "Hola Usuario",
    mainContent: "Mi contenido pincipal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application WITH Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome guest",
    mainHello: "Hello user",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const MyPageContext = () => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleLanguage = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  return (
    <div className="my-page">
      <ThemeProvider>
        <HeaderContext texts={texts} handleLanguage={handleLanguage} handleAuth={handleAuth} auth={auth} />
        <MainContext texts={texts} auth={auth} />
        <FooterContext texts={texts} />
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;

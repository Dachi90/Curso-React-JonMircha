import { LanguageProvider } from "../context/LanguageContext";
import { SessionProvider } from "../context/SessionContext";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const MyPageContext = () => {
  return (
    <div className="my-page">
      <SessionProvider>
        <ThemeProvider>
          <LanguageProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </LanguageProvider>
        </ThemeProvider>
      </SessionProvider>
    </div>
  );
};

export default MyPageContext;

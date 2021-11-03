const Main = ({ theme, texts, loginStatus }) => {
  return (
    <main className={theme}>
      {loginStatus ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <p>{texts.mainContent}</p>
    </main>
  );
};

export default Main;

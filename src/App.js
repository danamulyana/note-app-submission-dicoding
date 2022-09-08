import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ArsipPage from "./pages/ArsipPage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import Page404 from "./pages/Page404";
import './css/App.css';
import { getUserLogged, putAccessToken } from "./utils/network-data";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthContextProvider } from './context/AuthContext';
import { ThemeContextProvider } from "./context/ThemeContext";
import { LocaleContextProvider } from "./context/LocaleContext";

function App() {
  const [authedUser, setauthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [theme, setTheme] = React.useState(() => {return localStorage.getItem('theme') || 'light'});
  const [lang, setLang] = React.useState(() => { return localStorage.getItem('lang') || 'id'});

  const ToggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    })
  }

  const ToggleLang = () => {
    setLang((prevLang) => {
      const newlang = prevLang === 'id' ? 'en' : 'id';
      localStorage.setItem('lang',newlang);
      return newlang
    })
  }

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();

    setauthedUser(data);
  }

  const onLogout = () => {
    setauthedUser(null)

    putAccessToken('');
  }

  React.useEffect(() => {
    async function getUserLoggin(){
      const { data } = await getUserLogged();
      setauthedUser(data);
      setInitializing(false);
    }

    getUserLoggin();
  },[]);

  React.useEffect((prevTheme) => {
    if (prevTheme !== theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  },[theme]);

  React.useEffect((prevLang) => {
    if(prevLang !== lang){
      document.documentElement.setAttribute('lang',lang);
    }
  },[lang]);

  const AuthContextValue = React.useMemo(() => {
    return {
      authedUser,
      onLoginSuccess
    };
  }, [authedUser]);

  const ThemeContextValue = React.useMemo(() => {
    return {
      theme,
      ToggleTheme
    }
  }, [theme]);

  const LocaleContextValue = React.useMemo(() => {
    return {
      lang,
      ToggleLang
    }
  },[lang]);

  if(initializing){
    return null;
  }

  if(authedUser === null){
    return (
      <AuthContextProvider value={AuthContextValue}>
        <ThemeContextProvider value={ThemeContextValue}>
          <LocaleContextProvider value={LocaleContextValue}>
            <div className="App">
              <header className="App__header">
                <div className="App__header-content">
                  <div className="App__header-logo">
                    <Link to='/'>
                      <h3>CatatanKu</h3>
                    </Link>
                  </div>
                  <Navigation />
                </div>
              </header>
              <main>
                <Routes>
                  <Route path="/" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/*" element={<Page404 />} />
                </Routes>
              </main>
            </div>
          </LocaleContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    );
  }
  return (
    <AuthContextProvider value={AuthContextValue}>
      <ThemeContextProvider value={ThemeContextValue}>
        <LocaleContextProvider value={LocaleContextValue}>
          <div className="App">
            <header className="App__header">
              <div className="App__header-content">
                <div className="App__header-logo">
                  <Link to='/'>
                    <h3>CatatanKu</h3>
                  </Link>
                </div>
                <Navigation logout={onLogout} />
              </div>
            </header>
            <main className="App__main">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/archives" element={<ArsipPage />} />
                <Route path="/note/:id" element={<DetailPage />} />
                <Route path="/notes/new" element={<AddPage />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </main>
          </div>
        </LocaleContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;

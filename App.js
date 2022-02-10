import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Globalstyles } from "./styles/GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import HeaderCompo from "./components/Header";
import GlobalContext from "./context/Context";
import SigninPage from "./components/SigninPage";
import { useState, useEffect } from "react";
import SidebarCompo from "./components/Sidebar";
import UserAuthContextProvider from "./context/AuthContext";
import SignupPage from "./components/SignupPage";
import Forgotpassword from "./components/Forgotpassword";
import { CircleLoader } from "react-spinners";
function App() {
  const [isLoading, setIsLoading] = useState(false);

  const overRidingCss = {
    margin: " 200px auto",
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    display: "block",
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <GlobalContext>
        <Globalstyles />
        <UserAuthContextProvider>
          {isLoading ? (
            <CircleLoader
              color="darkgrey"
              loading={isLoading}
              size={100}
              css={overRidingCss}
              speedMultiplier={4}
            />
          ) : (
            <Router basename="/">
              <HeaderCompo />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/SignupPage" element={<SignupPage />} />
                <Route path="/SigninPage" element={<SigninPage />} />
                <Route path="/features" element={<SidebarCompo />} />
                <Route path="/forgotpassword" element={<Forgotpassword />} />
              </Routes>
            </Router>
          )}
        </UserAuthContextProvider>
      </GlobalContext>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogInInfo = localStorage.getItem("isLoggedIn");
    // reaching out to local storage, call getItem and search for isLoggedIn info
    //  returns info on isLoggedIn

    if (storedLogInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  // call useEffect, pass 2 areguments
  // 1st - anonomouse arrow function
  // 2nd - array of dependancies, the functions will only run if the dependancies 
  // change, and when the app first runs
  // because we left the array empty, this will only run when we load the app
  // this avoids an infinite loop

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;

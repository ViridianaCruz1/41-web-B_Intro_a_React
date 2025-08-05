import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
  //AUTENTICACION
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isAuth", isAuth);
  }, [isAuth]);

  //MOSTRAR LA LANDING PAGE DE TWITTER
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username) => {
    setIsAuth(true);
    const userData = { username };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setIsAuth(false);
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home user={user} logout={logout} />} />
        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;

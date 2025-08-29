import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/categories/Category";
import LoginSignup from "./components/login_signin/LoginSignin";
import SignIn from "./components/login_signin/Sign";
import About from "./components/about/about";
import Profile from "./components/profile/profile";
import SplashScreen from "./components/splashscreen/SplashScreen"; // <-- create this
import ProtectedRoute from "./ProtectedRoute ";

// Main router (your current app)
function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

// Wrapper with splash
function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // 3s splash
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <SplashScreen /> : <MainApp />;
}

export default App;

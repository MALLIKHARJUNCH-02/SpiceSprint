import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/categories/Category";
import LoginSignup from "./components/login_signin/LoginSignin";
import SignIn from "./components/login_signin/Sign";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Categories Page */}
        <Route path="/categories" element={<Category />} />

        <Route path="/loginsignup" element={<LoginSignup/>}/>

        <Route path="/signup" element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;

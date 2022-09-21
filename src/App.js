import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import { DEFAULT_ROUTES } from "./configuration/Route.Configuration";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path={DEFAULT_ROUTES.HOME} element={<Home />}></Route>
          <Route path={DEFAULT_ROUTES.SIGN_IN} element={<Login />}></Route>
          <Route path={DEFAULT_ROUTES.SIGN_UP} element={<Signup />}></Route>
          <Route path={DEFAULT_ROUTES.DASHBOARD} element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
          <Route path={DEFAULT_ROUTES.PROFILE} element={
            <ProtectedRoute>  <Profile /></ProtectedRoute>
          }></Route>
        </Routes>
        
      </AuthContextProvider>
    </React.Fragment>
  );
}

export default App;

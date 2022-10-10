import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./layouts/Dashboard";
import Home from "./layouts/Home";
import Login from "./layouts/Login";
import Register from "./layouts/Register";

import ContextProvider from "./utils/fetchContext";
import AuthProvider from "./utils/authContext";
import Duration from "./layouts/Duration";
import DurationCV from "./layouts/DurationCV";
import Coin from "./layouts/Coin";
import LastCoin from "./layouts/LastCoin";
import TotalRevenue from "./layouts/TotalRevenue";
import RewardedImpression from "./layouts/Impression";
import Churned from "./layouts/Churned";

function App() {
  return (
    <>
      <AuthProvider>
        <ContextProvider>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/duration" element={<Duration />} />
              <Route path="/duration_cv" element={<DurationCV />} />
              <Route path="/coin" element={<Coin />} />
              <Route path="/last_coin" element={<LastCoin />} />
              <Route path="/total_revenue" element={<TotalRevenue />} />
              <Route path="/impression" element={<RewardedImpression />} />
              <Route path="/churned" element={<Churned/>}/>
            </Routes>
          </Router>
        </ContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;

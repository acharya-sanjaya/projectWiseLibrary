import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Sidebar from "./components/Sidebar";
import React, { lazy } from "react";
import Dashboard from "./components/Dashboard";
// const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
    return (
        <BrowserRouter>
            <div className="admin-page-container">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

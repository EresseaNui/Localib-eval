import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
    HomePage,
    NewVehiculePage,
    VehiculeDetails,
    VehiculeListPage,
} from "./pages";

const Router: React.FC<unknown> = () => {
    return (
        <div className="relative">
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/vehicules" element={<VehiculeListPage />} />
                <Route path="/vehicule/:id" element={<VehiculeDetails />} />
                <Route path="/vehicule/new" element={<NewVehiculePage />} />
            </Routes>
        </div>
    );
};

const App: React.FC<unknown> = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default App;

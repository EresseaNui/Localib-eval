import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
    CustomerDetails,
    CustomerListPage,
    HomePage,
    NewCustomer,
    NewVehiculePage,
    UpdateCustomer,
    UpdateVehicule,
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
                <Route
                    path="/vehicule/:id/update"
                    element={<UpdateVehicule />}
                />
                <Route path="/vehicule/new" element={<NewVehiculePage />} />

                <Route path="/customers" element={<CustomerListPage />} />
                <Route path="/customer/:id" element={<CustomerDetails />} />
                <Route
                    path="/customer/:id/update"
                    element={<UpdateCustomer />}
                />
                <Route path="/customer/new" element={<NewCustomer />} />
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

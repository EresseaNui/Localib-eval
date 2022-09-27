import React from "react";
import { NavLink } from "react-router-dom";

const HomePage: React.FC<unknown> = () => {
    const links = [
        {
            name: "Location véhicules",
            uri: "/1",
        },
        {
            name: "Gestion véhicules",
            uri: "/vehicules",
        },
        {
            name: "Gestion clients",
            uri: "/3",
        },
        {
            name: "Gestion locations",
            uri: "/4",
        },
    ] as const;

    return (
        <div className="sm:p-24 p-0 sm:m-auto">
            <div className=" sm:border border-blue-primary rounded-lg max-w-full sm:max-w-xl">
                <div>
                    <img
                        src={require("../images/localib-removebg-preview.png")}
                        className="m-auto"
                    />
                </div>
                <div className="flex flex-col text-center sm:space-y-5 sm:pb-5">
                    {links.map((link, key) => (
                        <NavLink
                            to={link.uri}
                            key={key}
                            className="bg-blue-primary sm:py-4 sm:w-4/5 sm:m-auto sm:rounded-full py-6 sm:border-none border-t-2 border-white text-white hover:bg-blue-700"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;

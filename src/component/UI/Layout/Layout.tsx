import React from "react";

import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { HiMenu } from "react-icons/hi";

export interface LayoutProps {
    children: React.ReactNode;
    navMenu?: boolean;
    className?: string;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    navMenu = true,
    className,
}) => {
    const links = [
        {
            name: "Acceuil",
            uri: "/",
        },
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
        <div>
            {navMenu && (
                <div>
                    <Disclosure>
                        <Disclosure.Button className="flex justify-end w-full border-b-2 text-blue-primary sm:hidden border-blue-primary ">
                            <HiMenu className="w-8 h-8" />
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div>
                                <div>
                                    <img
                                        src={require("../../../images/localib-removebg-preview.png")}
                                        className="w-20 h-20 m-auto"
                                    />
                                </div>
                                <div className="flex flex-col h-full px-5 pb-5 space-y-5 text-center border-b-2 border-blue-primary">
                                    {links.map((link, key) => (
                                        <NavLink
                                            to={link.uri}
                                            key={key}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "hidden"
                                                    : "bg-blue-primary rounded-full px-5 py-2  text-white hover:bg-blue-700 shadow-md"
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                </div>
            )}
            <div
                className={clsx(
                    {
                        flex: navMenu,
                    },
                    className
                )}
            >
                {navMenu && (
                    <div className="flex-col justify-center hidden h-screen sm:flex ">
                        <div className="fixed p-5 border-t border-b border-r rounded-lg shadow-md w-max border-blue-primary h-fit">
                            <div>
                                <img
                                    src={require("../../../images/localib-removebg-preview.png")}
                                    className="w-20 h-20 m-auto"
                                />
                            </div>
                            <div className="flex flex-col h-full space-y-5 text-center">
                                {links.map((link, key) => (
                                    <NavLink
                                        to={link.uri}
                                        key={key}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "bg-white border border-blue-primary rounded-full text-blue-primary  px-5 py-2 hover:bg-slate-300 shadow-inner"
                                                : "bg-blue-primary rounded-full px-5 py-2  text-white hover:bg-blue-700 shadow-md"
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                <div className="p-10 ml-auto sm:ml-64">{children}</div>
            </div>
        </div>
    );
};

export default Layout;

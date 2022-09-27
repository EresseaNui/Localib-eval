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
                        <Disclosure.Button className="flex text-blue-primary w-full justify-end sm:hidden border-b-2 border-blue-primary ">
                            <HiMenu className="h-8 w-8" />
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div>
                                <div>
                                    <img
                                        src={require("../../../images/localib-removebg-preview.png")}
                                        className="m-auto w-20 h-20"
                                    />
                                </div>
                                <div className="flex flex-col text-center space-y-5 h-full px-5 pb-5 border-b-2 border-blue-primary">
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
                    <div className="hidden h-screen sm:flex flex-col justify-center ">
                        <div className="border-t border-b border-r w-max border-blue-primary shadow-md rounded-lg h-fit p-5">
                            <div>
                                <img
                                    src={require("../../../images/localib-removebg-preview.png")}
                                    className="m-auto h-20 w-20"
                                />
                            </div>
                            <div className="flex flex-col text-center space-y-5 h-full">
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
                <div className="p-10">{children}</div>
            </div>
        </div>
    );
};

export default Layout;

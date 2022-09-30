import React, { Key } from "react";
import ICustomer from "../../types/customer.type";
import { Disclosure } from "@headlessui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import { customerService } from "../../services/customerService";

export interface CustomersTableProps {
    customers: ICustomer[];
    reFetch: () => Promise<void>;
}

const CustomersTable: React.FC<CustomersTableProps> = ({
    customers,
    reFetch,
}) => {
    const onClickDelete = async (id: string): Promise<void> => {
        await customerService.delete(id);
        reFetch();
    };
    return (
        <div>
            <div className="text-center font-semibold  text-gray-900 py-2 w-full grid grid-cols-6 md:grid-cols-10 rounded-full">
                <div className=" md:col-span-2 col-span-3">
                    <p>Prénom</p>
                </div>
                <div className="col-span-2">
                    <p>Nom</p>
                </div>
                <div className="hidden md:block col-span-2">
                    <p>Téléphone</p>
                </div>
                <div className="hidden md:block col-span-3">
                    <p>Email</p>
                </div>
            </div>
            {customers.map((customer: ICustomer, key: Key) => (
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="text-gray-900 py-2 border border-blue-primary w-full grid grid-cols-6 md:grid-cols-10 rounded-full hover:bg-blue-200">
                                <div className="md:col-span-2 col-span-3">
                                    <p>{customer.lastname}</p>
                                </div>
                                <div className="col-span-2">
                                    <p>{customer.firstname}</p>
                                </div>
                                <div className="hidden md:block col-span-2">
                                    <p>{customer.phone}</p>
                                </div>
                                <div className="hidden md:block col-span-3">
                                    <p>{customer.mail}</p>
                                </div>
                                <div className="col-span-1 flex  justify-end items-center h-full mr-2">
                                    {open ? <BsChevronUp /> : <BsChevronDown />}
                                </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="mx-5 py-5  bg-blue-100 font-semibold">
                                <div className="flex flex-col md:flex-row items-center md:justify-around md:px-0 md:space-y-0 space-y-2 px-5">
                                    <NavLink
                                        to={`/customer/${customer.id}/update`}
                                        className="flex items-center justify-center w-full gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 md:w-fit"
                                    >
                                        <BiPencil />
                                        modifier
                                    </NavLink>
                                    <NavLink
                                        to={`/customer/${customer.id}`}
                                        className="flex items-center justify-center gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 md:w-fit w-full"
                                    >
                                        <AiOutlineEye />
                                        Voir
                                    </NavLink>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            onClickDelete(customer.id)
                                        }
                                        className="flex items-center justify-center gap-4 px-4 py-2 text-center text-white bg-red-500 border rounded-full hover:bg-red-600 md:w-fit w-full"
                                    >
                                        <HiOutlineTrash />
                                        Supprimer
                                    </button>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    );
};

export default CustomersTable;

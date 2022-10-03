import React, { Key, useState } from "react";
import ICustomer from "../../types/customer.type";
import { Disclosure } from "@headlessui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { Button } from "../UI";
import CustomerConfirmDeleteModal from "../Modals/CustomerConfirmDeleteModal";

export interface CustomersTableProps {
    customers: ICustomer[];
    reFetch: () => Promise<void>;
}

const CustomersTable: React.FC<CustomersTableProps> = ({
    customers,
    reFetch,
}) => {
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [customer, setCustomer] = useState<ICustomer>();

    return (
        <div>
            <div className="grid w-full grid-cols-6 py-2 font-semibold text-center text-gray-900 rounded-full md:grid-cols-10">
                <div className="col-span-3 md:col-span-2">
                    <p>Prénom</p>
                </div>
                <div className="col-span-2">
                    <p>Nom</p>
                </div>
                <div className="hidden col-span-2 md:block">
                    <p>Téléphone</p>
                </div>
                <div className="hidden col-span-3 md:block">
                    <p>Email</p>
                </div>
            </div>
            {customers.map((customer: ICustomer, key: Key) => (
                <Disclosure key={key}>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="grid w-full grid-cols-6 py-2 text-gray-900 border rounded-full border-blue-primary md:grid-cols-10 hover:bg-blue-200">
                                <div className="col-span-3 md:col-span-2">
                                    <p>{customer.lastname}</p>
                                </div>
                                <div className="col-span-2">
                                    <p>{customer.firstname}</p>
                                </div>
                                <div className="hidden col-span-2 md:block">
                                    <p>{customer.phone}</p>
                                </div>
                                <div className="hidden col-span-3 md:block">
                                    <p>{customer.mail}</p>
                                </div>
                                <div className="flex items-center justify-end h-full col-span-1 mr-2">
                                    {open ? <BsChevronUp /> : <BsChevronDown />}
                                </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="py-5 mx-5 font-semibold bg-blue-100">
                                <div className="flex flex-col items-center px-5 space-y-2 md:flex-row md:justify-around md:px-0 md:space-y-0">
                                    <NavLink
                                        to={`/customer/${customer.id}/update`}
                                        className="flex items-center justify-center w-full gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 md:w-fit"
                                    >
                                        <BiPencil />
                                        modifier
                                    </NavLink>
                                    <NavLink
                                        to={`/customer/${customer.id}`}
                                        className="flex items-center justify-center w-full gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 md:w-fit"
                                    >
                                        <AiOutlineEye />
                                        Voir
                                    </NavLink>
                                    <Button
                                        icon="trash"
                                        variant="basic"
                                        color="red"
                                        onClick={() => {
                                            setCustomer(customer);
                                            setShowDeleteModal(true);
                                        }}
                                    >
                                        Supprimer
                                    </Button>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
            {showDeleteModal && customer && (
                <CustomerConfirmDeleteModal
                    customer={customer}
                    open={showDeleteModal}
                    setOpen={setShowDeleteModal}
                />
            )}
        </div>
    );
};

export default CustomersTable;

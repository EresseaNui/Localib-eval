import React from "react";

import Layout from "../../component/UI/Layout/Layout";
import { FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlineEye, AiOutlinePlusCircle } from "react-icons/ai";
import useFetch from "../../api/hooks/useFetch";
import { Key } from "react-hook-form/dist/types/path/common";
import ICustomer from "../../types/customer.type";
import { BiPencil } from "react-icons/bi";
import { format } from "date-fns";
import { customerService } from "../../services/customerService";
import { TitleWithReturn } from "../../component/UI";

const CustomerListPage: React.FC<unknown> = () => {
    const { data: customers, reFetch } = useFetch("/customers");

    const onClickDelete = async (id: string): Promise<void> => {
        await customerService.delete(id);
        reFetch();
    };

    return (
        <Layout>
            <div className="space-y-5">
                <TitleWithReturn title="Liste des Clients" icon={<FiUsers />} />
                <div>
                    <NavLink
                        to={`/customer/new`}
                        className="flex items-center gap-4 px-4 py-2 text-center text-white bg-green-500 border rounded-full hover:bg-green-600 w-fit"
                    >
                        <AiOutlinePlusCircle className="w-8 h-8" />
                        Ajouter un client
                    </NavLink>
                </div>
                <div>
                    {customers.map((customer: ICustomer, key: Key) => (
                        <div
                            className="p-5 border rounded-lg border-blue-primary"
                            key={key}
                        >
                            <p>{customer.lastname}</p>
                            <p>{customer.firstname}</p>
                            <p>{customer.phone}</p>
                            <p>{customer.mail}</p>
                            <p>
                                {String(
                                    format(
                                        new Date(customer.birthdate),
                                        "dd/MM/yyyy"
                                    )
                                )}
                            </p>

                            <div>
                                <p>actions: </p>
                                <NavLink
                                    to={`/customer/${customer.id}/update`}
                                    className="flex items-center gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 w-fit"
                                >
                                    <BiPencil />
                                    modifier
                                </NavLink>
                                <NavLink
                                    to={`/customer/${customer.id}`}
                                    className="flex items-center gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 w-fit"
                                >
                                    <AiOutlineEye />
                                    Voir
                                </NavLink>
                                <button
                                    type="button"
                                    onClick={() => onClickDelete(customer.id)}
                                    className="flex items-center gap-4 px-4 py-2 text-center text-white bg-red-500 border rounded-full hover:bg-red-600 w-fit"
                                >
                                    <HiOutlineTrash />
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default CustomerListPage;

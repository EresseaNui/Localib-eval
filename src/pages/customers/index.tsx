import React from "react";
import Layout from "../../component/UI/Layout/Layout";
import { FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import useFetch from "../../api/hooks/useFetch";
import { TitleWithReturn } from "../../component/UI";
import CustomersTable from "../../component/DisclosureArray/CustomersTable";

const CustomerListPage: React.FC<unknown> = () => {
    const { data: customers } = useFetch("/customers");

    return (
        <Layout>
            <div className="space-y-5">
                <TitleWithReturn title="Liste des Clients" icon={<FiUsers />} />
                <div>
                    <p>
                        Retrouvez la liste des véhicules, ainsi que leur
                        disponibilitées.
                    </p>
                </div>
                <div>
                    <NavLink
                        to={`/customer/new`}
                        className="flex items-center gap-4 px-4 py-2 font-semibold text-center text-white bg-green-500 border rounded-full hover:bg-green-600 w-fit"
                    >
                        <AiOutlinePlusCircle className="w-8 h-8" />
                        Ajouter un client
                    </NavLink>
                </div>
                <CustomersTable customers={customers} />
            </div>
        </Layout>
    );
};

export default CustomerListPage;

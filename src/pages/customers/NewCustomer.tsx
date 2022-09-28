import React from "react";

import clsx from "clsx";
import Layout from "../../component/UI/Layout/Layout";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import NewCustomerForm from "../../component/Form/CustomerForm/NewCustomerForm";
import {
    CustomerPayload,
    customerService,
} from "../../services/customerService";
import { redirect } from "../../utils/redirect";

export interface NewCustomerProps {
    className?: string;
}

const NewCustomer: React.FC<unknown> = () => {
    const onSubmitNewCustomer = async (
        formValues: CustomerPayload
    ): Promise<void> => {
        await customerService.createNewCustomer(formValues);
        redirect("/customers");
    };
    return (
        <Layout>
            <div>
                <div>
                    <NavLink
                        to="/vehicules"
                        className="flex items-center space-x-1"
                    >
                        <HiOutlineArrowNarrowLeft className="mt-1" />
                        <p>retour</p>
                    </NavLink>
                </div>
                <div>Ajouter un nouveau client</div>
                <div>
                    <NewCustomerForm onSubmit={onSubmitNewCustomer} />
                </div>
            </div>
        </Layout>
    );
};

export default NewCustomer;

import React from "react";

import Layout from "../../component/UI/Layout/Layout";
import NewCustomerForm from "../../component/Form/CustomerForm/NewCustomerForm";
import {
    CustomerPayload,
    customerService,
} from "../../services/customerService";
import { redirect } from "../../utils/redirect";
import { FiUserPlus } from "react-icons/fi";
import { TitleWithReturn } from "../../component/UI";

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
                <TitleWithReturn
                    title="Ajouter un nouveau client"
                    path="/customers"
                    icon={<FiUserPlus />}
                />
                <div>
                    <NewCustomerForm onSubmit={onSubmitNewCustomer} />
                </div>
            </div>
        </Layout>
    );
};

export default NewCustomer;

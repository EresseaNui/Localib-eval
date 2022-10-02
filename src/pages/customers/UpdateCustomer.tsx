import React from "react";

import Layout from "../../component/UI/Layout/Layout";
import { useParams } from "react-router-dom";
import UpdateCustomerForm from "../../component/Form/CustomerForm/UpdateCustomerForm";
import { TitleWithReturn } from "../../component/UI";
import useFetch from "../../api/hooks/useFetch";
import { RiUserSettingsLine } from "react-icons/ri";

export interface UpdateCustomerProps {
    className?: string;
}

const UpdateCustomer: React.FC<UpdateCustomerProps> = ({ className = "" }) => {
    const { id } = useParams();
    const { data: customer, reFetch } = useFetch(`/customers/${id}`);
    return (
        <Layout>
            <div className="space-y-10">
                <TitleWithReturn
                    title="Modifier Client"
                    path="/customers"
                    icon={<RiUserSettingsLine />}
                />
                {id && (
                    <UpdateCustomerForm
                        id={id}
                        customer={customer}
                        reFetch={reFetch}
                    />
                )}
            </div>
        </Layout>
    );
};

export default UpdateCustomer;

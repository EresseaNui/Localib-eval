import React from "react";

import clsx from "clsx";
import Layout from "../../component/UI/Layout/Layout";
import { NavLink, useParams } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
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
            <div>
                <TitleWithReturn
                    title="Modifier Client"
                    path="/customers"
                    icon={<RiUserSettingsLine />}
                />
                {id && (
                    <div>
                        <UpdateCustomerForm
                            id={id}
                            customer={customer}
                            reFetch={reFetch}
                        />
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default UpdateCustomer;

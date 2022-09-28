import React from "react";

import clsx from "clsx";
import Layout from "../../component/UI/Layout/Layout";
import { NavLink, useParams } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import UpdateCustomerForm from "../../component/Form/CustomerForm/UpdateCustomerForm";

export interface UpdateCustomerProps {
    className?: string;
}

const UpdateCustomer: React.FC<UpdateCustomerProps> = ({ className = "" }) => {
    const { id } = useParams();
    return (
        <Layout>
            <div>
                <div>
                    <NavLink
                        to="/customers"
                        className="flex items-center space-x-1"
                    >
                        <HiOutlineArrowNarrowLeft className="mt-1" />
                        <p>retour</p>
                    </NavLink>
                </div>
                <div>Modifier Client</div>
                {id && (
                    <div>
                        <UpdateCustomerForm id={id} />
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default UpdateCustomer;

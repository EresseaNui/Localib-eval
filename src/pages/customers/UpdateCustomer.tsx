import React from "react";

import clsx from "clsx";
import Layout from "../../component/UI/Layout/Layout";

export interface UpdateCustomerProps {
    className?: string;
}

const UpdateCustomer: React.FC<UpdateCustomerProps> = ({ className = "" }) => {
    return (
        <Layout>
            <p>UpdateCustomer</p>
        </Layout>
    );
};

export default UpdateCustomer;

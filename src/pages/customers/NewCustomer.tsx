import React from "react";

import clsx from "clsx";
import Layout from "../../component/UI/Layout/Layout";

export interface NewCustomerProps {
    className?: string;
}

const NewCustomer: React.FC<NewCustomerProps> = ({ className = "" }) => {
    return (
        <Layout>
            <p>NewCustomer</p>
        </Layout>
    );
};

export default NewCustomer;

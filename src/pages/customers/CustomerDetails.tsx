import React from "react";

import clsx from "clsx";
import Layout from "../../component/UI/Layout/Layout";

export interface CustomerDetailsProps {
    className?: string;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({
    className = "",
}) => {
    return (
        <Layout>
            <p>CustomerDetails</p>
        </Layout>
    );
};

export default CustomerDetails;

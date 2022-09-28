import { format } from "date-fns";
import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "../../api/hooks/useFetch";

import Layout from "../../component/UI/Layout/Layout";
import { formattedDate } from "../../utils/formatDate";

const CustomerDetails: React.FC<unknown> = () => {
    const { id } = useParams();

    const { data: customer } = useFetch(`/customers/${id}`);

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
                <div>
                    <p>
                        Detail de {customer.lastname}&nbsp;
                        {customer.firstname}
                    </p>
                </div>
                <div>
                    <p>{customer.mail}</p>
                    <p>{customer.phone}</p>
                    <p>{formattedDate(new Date(customer.birthdate), "/")}</p>
                </div>
            </div>
        </Layout>
    );
};

export default CustomerDetails;

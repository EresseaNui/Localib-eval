import { format } from "date-fns";
import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "../../api/hooks/useFetch";

import Layout from "../../component/UI/Layout/Layout";
import { formattedDate } from "../../utils/formatDate";

const CustomerDetails: React.FC<unknown> = () => {
    const { id } = useParams();

    const { data: customer } = useFetch(`/clients/${id}`);

    console.log(customer);

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
                        Detail de {customer.nom}&nbsp;
                        {customer.prenom}
                    </p>
                </div>
                <div>
                    <p>{customer.email}</p>
                    <p>{customer.telephone}</p>
                    <p>
                        {/* {format(
                            new Date(customer.date_naissance),
                            "dd/MM/yyyy"
                        )} */}
                        {formattedDate(new Date(customer.date_naissance), "/")}
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default CustomerDetails;

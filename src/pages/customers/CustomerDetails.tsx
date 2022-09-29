import React from "react";
import { FiUser } from "react-icons/fi";
import { useParams } from "react-router-dom";
import useFetch from "../../api/hooks/useFetch";
import { TitleWithReturn } from "../../component/UI";

import Layout from "../../component/UI/Layout/Layout";
import { formattedDate } from "../../utils/formatDate";

const CustomerDetails: React.FC<unknown> = () => {
    const { id } = useParams();

    const { data: customer } = useFetch(`/customers/${id}`);

    return (
        <Layout>
            <div>
                <TitleWithReturn
                    title={`Détails client : ${customer.firstname} ${customer.lastname}`}
                    path="/customers"
                    icon={<FiUser />}
                />
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

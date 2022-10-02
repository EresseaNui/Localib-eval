import React from "react";
import { FiUser } from "react-icons/fi";
import { useParams } from "react-router-dom";
import useFetch from "../../api/hooks/useFetch";
import { Card, TitleWithReturn } from "../../component/UI";

import Layout from "../../component/UI/Layout/Layout";
import { formattedDate } from "../../utils/formatDate";

const CustomerDetails: React.FC<unknown> = () => {
    const { id } = useParams();

    const { data: customer } = useFetch(`/customers/${id}`);

    return (
        <Layout>
            <div className="space-y-10">
                <TitleWithReturn
                    title={`Détails client : ${customer.firstname} ${customer.lastname}`}
                    path="/customers"
                    icon={<FiUser />}
                />
                <Card title={`${customer.firstname} ${customer.lastname}`}>
                    <p>
                        <span className="font-semibold">
                            Date de Naissance :&nbsp;
                        </span>
                        {formattedDate(new Date(customer.birthdate), "/")}
                    </p>
                    <p>
                        <span className="font-semibold">Email :&nbsp;</span>
                        {customer.mail}
                    </p>
                    <p>
                        <span className="font-semibold">Telephone :&nbsp;</span>
                        {customer.phone}
                    </p>
                </Card>
                <div>
                    <p>Histo</p>
                </div>
            </div>
        </Layout>
    );
};

export default CustomerDetails;

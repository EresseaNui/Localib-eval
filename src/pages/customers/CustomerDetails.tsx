import { format } from "date-fns";
import React, { useState, useEffect, Key } from "react";
import { BiPencil } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "../../api/hooks/useFetch";
import CustomerConfirmDeleteModal from "../../component/Modals/CustomerConfirmDeleteModal";
import { Button, Card, TitleWithReturn } from "../../component/UI";

import Layout from "../../component/UI/Layout/Layout";
import { rentingService } from "../../services/rentingService";
import IRenting from "../../types/renting.type";
import { formattedDate } from "../../utils/formatDate";

const CustomerDetails: React.FC<unknown> = () => {
    const { id } = useParams();

    const [rentingsHistory, setRentingHistory] = useState<IRenting[]>([]);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    useEffect(() => {
        if (id) getRentingHistory(id);
    }, [id]);

    const getRentingHistory = async (payload: string): Promise<void> => {
        rentingService
            .getRentingHistory(payload)
            .then((data) => setRentingHistory(data));
    };

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

                <div className="flex justify-around w-1/2">
                    <NavLink
                        to={`/customer/${customer.id}/update`}
                        className="flex items-center justify-center w-full gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 md:w-fit"
                    >
                        <BiPencil />
                        Modifier
                    </NavLink>
                    <Button
                        icon="trash"
                        variant="basic"
                        color="red"
                        onClick={() => setShowDeleteModal(true)}
                    >
                        Supprimer
                    </Button>
                </div>

                <Card title="Historique des Locations">
                    {rentingsHistory.map((renting: IRenting, key: Key) => (
                        <div
                            key={key}
                            className="flex p-4 border-2 border-black rounded-lg shadow-inner"
                        >
                            <div className="w-1/2">
                                <p>
                                    <span className="font-semibold">
                                        Début :&nbsp;
                                    </span>
                                    {String(
                                        format(
                                            new Date(renting.start_date),
                                            "dd/MM/yyyy"
                                        )
                                    )}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Fin :&nbsp;
                                    </span>
                                    {String(
                                        format(
                                            new Date(renting.end_date),
                                            "dd/MM/yyyy"
                                        )
                                    )}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Tarification :&nbsp;
                                    </span>
                                    {renting.pricing} €
                                </p>
                            </div>
                            <div className="w-1/2">
                                <p>
                                    <span className="font-semibold">
                                        Marque :&nbsp;
                                    </span>
                                    {renting.vehicle.brand}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Modèle :&nbsp;
                                    </span>
                                    {renting.vehicle.model}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Plaque d'immatriculation :&nbsp;
                                    </span>

                                    {renting.vehicle.registration_number}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Etat du véhicule :&nbsp;
                                    </span>
                                    {renting.vehicle.vehicle_state}
                                </p>
                            </div>
                        </div>
                    ))}
                </Card>
            </div>
            {showDeleteModal && (
                <CustomerConfirmDeleteModal
                    customer={customer}
                    open={showDeleteModal}
                    setOpen={setShowDeleteModal}
                />
            )}
        </Layout>
    );
};

export default CustomerDetails;

import React from "react";

import { MdCarRental } from "react-icons/md";
import { useParams } from "react-router-dom";
import useFetch from "../../api/hooks/useFetch";
import { Button, Card, TitleWithReturn } from "../../component/UI";
import Layout from "../../component/UI/Layout/Layout";
import { rentingService } from "../../services/rentingService";
import { displayTypeName } from "../../utils/displayVehicleType";

import { formattedDate } from "../../utils/formatDate";
import { redirect } from "../../utils/redirect";

const RentingDetails: React.FC<unknown> = () => {
    const { id } = useParams();

    const { data: renting } = useFetch(`/rentings/${id}`);

    const onClickDelete = async (id: string): Promise<void> => {
        await rentingService.delete(id);
        redirect(`/rentings`);
    };
    return (
        <Layout>
            <div className="space-y-10">
                <TitleWithReturn
                    title="Details de la Location"
                    path="/rentings"
                    icon={<MdCarRental />}
                />
                <Button
                    icon="trash"
                    variant="basic"
                    color="red"
                    onClick={() => onClickDelete(renting.id)}
                >
                    Supprimer
                </Button>
                <Card>
                    <div className="space-y-4">
                        <div>
                            <p>
                                <span className="font-semibold">
                                    Début :&nbsp;
                                </span>
                                {formattedDate(
                                    new Date(renting.start_date),
                                    "/"
                                )}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Fin :&nbsp;
                                </span>
                                {formattedDate(new Date(renting.end_date), "/")}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Tarification :&nbsp;
                                </span>
                                {renting.pricing} €
                            </p>
                        </div>
                        <div className="flex p-4 border-2 border-black rounded-lg shadow-inner">
                            <div className="w-1/2">
                                <p className="text-lg font-semibold text-blue-primary">
                                    Véhicule :
                                </p>
                                {renting && renting.vehicle && (
                                    <div>
                                        <p>
                                            <span className="font-semibold">
                                                Type :&nbsp;
                                            </span>
                                            {displayTypeName(
                                                renting.vehicle.type
                                            )}
                                        </p>
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
                                                Immatriculation :&nbsp;
                                            </span>
                                            {
                                                renting.vehicle
                                                    .registration_number
                                            }
                                        </p>
                                        <p>
                                            <span className="font-semibold">
                                                Etat du véhicule :&nbsp;
                                            </span>
                                            {renting.vehicle.vehicle_state}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="w-1/2">
                                <p className="text-lg font-semibold text-blue-primary">
                                    Client :
                                </p>
                                {renting && renting.customer && (
                                    <div>
                                        <p>
                                            <span className="font-semibold">
                                                Prénom :&nbsp;
                                            </span>
                                            {renting.customer.firstname}
                                        </p>
                                        <p>
                                            <span className="font-semibold">
                                                Nom :&nbsp;
                                            </span>
                                            {renting.customer.lastname}
                                        </p>
                                        <p>
                                            <span className="font-semibold">
                                                Email :&nbsp;
                                            </span>
                                            {renting.customer.mail}
                                        </p>
                                        <p>
                                            <span className="font-semibold">
                                                Téléphone :&nbsp;
                                            </span>
                                            {renting.customer.phone}
                                        </p>
                                        <p>
                                            <span className="font-semibold">
                                                Date de Naissance :&nbsp;
                                            </span>
                                            {formattedDate(
                                                new Date(
                                                    renting.customer.birthdate
                                                ),
                                                "/"
                                            )}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </Layout>
    );
};

export default RentingDetails;

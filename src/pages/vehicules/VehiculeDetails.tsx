import React from "react";

import useFetch from "../../api/hooks/useFetch";
import { NavLink, redirect, useParams } from "react-router-dom";
import Layout from "../../component/UI/Layout/Layout";
import { Button, Card, TitleWithReturn } from "../../component/UI";
import { displayType, displayTypeName } from "../../utils/displayVehicleType";
import { BiPencil } from "react-icons/bi";
import { vehiculeService } from "../../services/vehiculeService";

const VehiculeDetails: React.FC<unknown> = () => {
    const { id } = useParams();

    const { data: vehicule } = useFetch(`/vehicles/${id}`);

    const onClickDelete = async (id: string): Promise<void> => {
        await vehiculeService.delete(id);
        redirect("/customers");
    };

    return (
        <Layout>
            <div className="space-y-10">
                <TitleWithReturn
                    title={`Détails ${displayTypeName(vehicule.type)}`}
                    path="/vehicules"
                    icon={displayType(vehicule.type)}
                />
                <Card title={`${vehicule.brand} ${vehicule.model}`}>
                    <div>
                        <p>
                            <span className="font-semibold">
                                Marque :&nbsp;
                            </span>
                            {vehicule.brand}
                        </p>
                        <p>
                            <span className="font-semibold">
                                Modèle :&nbsp;
                            </span>
                            {vehicule.model}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="font-semibold">
                                Immatriculation :&nbsp;
                            </span>
                            {vehicule.registration_number}
                        </p>
                        <p>
                            <span className="font-semibold">
                                Tarification (€/jour) :&nbsp;
                            </span>
                            {vehicule.renting_price}
                        </p>
                    </div>
                </Card>
                <div className="flex justify-around w-1/2">
                    <NavLink
                        to={`/customer/${vehicule.id}/update`}
                        className="flex items-center justify-center w-full gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 md:w-fit"
                    >
                        <BiPencil />
                        Modifier
                    </NavLink>
                    <Button
                        icon="trash"
                        variant="basic"
                        color="red"
                        onClick={() => onClickDelete(vehicule.id)}
                    >
                        Supprimer
                    </Button>
                </div>
            </div>
        </Layout>
    );
};

export default VehiculeDetails;

import React, { Key } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "../../api/hooks/useFetch";
import Layout from "../../component/UI/Layout/Layout";
import IVehicule from "../../types/vehicule.type";
import { formattedDate } from "../../utils/formatDate";

const RentingDetails: React.FC<unknown> = () => {
    const { id } = useParams();

    const { data: renting } = useFetch(`/rentings/${id}`);

    return (
        <Layout>
            <div>
                <div>
                    <NavLink
                        to="/rentings"
                        className="flex items-center space-x-1"
                    >
                        <HiOutlineArrowNarrowLeft className="mt-1" />
                        <p>retour</p>
                    </NavLink>
                </div>
                <div>
                    <p>Details de Location</p>
                </div>
                <div>
                    <p>
                        Début :
                        {formattedDate(new Date(renting.start_date), "/")}
                    </p>
                    <p>
                        Fin : {formattedDate(new Date(renting.end_date), "/")}
                    </p>
                    <p>{renting.pricing} €</p>
                    <div>
                        <p>Véhicule :</p>
                        {renting && renting.vehicle && (
                            <div>
                                <p>{renting.vehicle.brand}</p>
                                <p>{renting.vehicle.model}</p>
                                <p>{renting.vehicle.registration_number}</p>
                                <p>{renting.vehicle.type}</p>
                                <p>{renting.vehicle_state}</p>
                            </div>
                        )}
                    </div>
                    <div>
                        <p>Client :</p>
                        {renting && renting.customer && (
                            <div>
                                <p>
                                    {renting.customer.firstname}&nbsp;
                                    {renting.customer.lastname}
                                </p>
                                <p>{renting.customer.mail}</p>
                                <p>{renting.customer.phone}</p>
                                <p>
                                    {formattedDate(
                                        new Date(renting.customer.birthdate),
                                        "/"
                                    )}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default RentingDetails;

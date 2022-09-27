import React from "react";

import clsx from "clsx";
import useFetch from "../../api/hooks/useFetch";
import Layout from "../../component/UI/Layout/Layout";
import { AiFillCar, AiOutlinePlusCircle } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import { BiPencil } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const VehiculeListPage: React.FC<unknown> = () => {
    const { data: vehicules } = useFetch("/vehicules");

    const onClickDelete = (id: string): void => {
        console.log("TODO: Connecter delete au back");
    };

    return (
        <Layout>
            <div className="space-y-5">
                <div className="text-blue-primary text-3xl flex items-center gap-2">
                    <p className=" font-semibold">Liste des véhicules</p>
                    <AiFillCar />
                </div>
                <div>
                    <p>
                        Retrouvez la liste des véhicules, ainsi que leur
                        disponibilitées.
                    </p>
                </div>
                <div>
                    <NavLink
                        to={`/vehicule/new`}
                        className="border rounded-full px-4 py-2 text-center text-white bg-green-500 hover:bg-green-600 flex items-center w-fit gap-4"
                    >
                        <AiOutlinePlusCircle className="w-8 h-8" />
                        Ajouter un véhicule
                    </NavLink>
                </div>
                <div>
                    {vehicules.map((vehicule, key) => (
                        <div
                            className="border rounded-lg border-blue-primary p-5"
                            key={key}
                        >
                            <p>{vehicule.marque}</p>
                            <p>{vehicule.modele}</p>
                            <p>{vehicule.type}</p>
                            <p>{vehicule.immatriculation}</p>
                            <p>{vehicule.etat}</p>
                            {vehicule.louer ? (
                                <p>véhicule louer</p>
                            ) : (
                                <p>véhicule dispo</p>
                            )}
                            <div>
                                <p>actions: </p>
                                <NavLink
                                    to={`/vehicule/${vehicule.id}/update`}
                                    className="border rounded-full px-4 py-2 text-center text-white bg-blue-primary hover:bg-blue-700 flex items-center w-fit gap-4"
                                >
                                    <BiPencil />
                                    modifier
                                </NavLink>
                                <button
                                    type="button"
                                    onClick={() => onClickDelete(vehicule.id)}
                                    className="border rounded-full px-4 py-2 text-center text-white bg-red-500 hover:bg-red-600 flex items-center w-fit gap-4"
                                >
                                    <HiOutlineTrash />
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default VehiculeListPage;

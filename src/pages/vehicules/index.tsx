import React from "react";
import useFetch from "../../api/hooks/useFetch";
import Layout from "../../component/UI/Layout/Layout";
import { AiFillCar, AiOutlineEye, AiOutlinePlusCircle } from "react-icons/ai";
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
                <div className="flex items-center gap-2 text-3xl text-blue-primary">
                    <p className="font-semibold ">Liste des véhicules</p>
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
                        className="flex items-center gap-4 px-4 py-2 text-center text-white bg-green-500 border rounded-full hover:bg-green-600 w-fit"
                    >
                        <AiOutlinePlusCircle className="w-8 h-8" />
                        Ajouter un véhicule
                    </NavLink>
                </div>
                <div>
                    {vehicules.map((vehicule, key) => (
                        <div
                            className="p-5 border rounded-lg border-blue-primary"
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
                                    className="flex items-center gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 w-fit"
                                >
                                    <BiPencil />
                                    modifier
                                </NavLink>
                                <NavLink
                                    to={`/vehicule/${vehicule.id}`}
                                    className="flex items-center gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 w-fit"
                                >
                                    <AiOutlineEye />
                                    Voir
                                </NavLink>
                                <button
                                    type="button"
                                    onClick={() => onClickDelete(vehicule.id)}
                                    className="flex items-center gap-4 px-4 py-2 text-center text-white bg-red-500 border rounded-full hover:bg-red-600 w-fit"
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

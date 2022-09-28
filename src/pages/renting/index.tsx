import React, { useEffect } from "react";
import { HiOutlineArrowNarrowLeft, HiOutlineTrash } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Layout from "../../component/UI/Layout/Layout";
import { MdOutlineCarRental } from "react-icons/md";
import { AiOutlineEye, AiOutlinePlusCircle } from "react-icons/ai";
import useFetch from "../../api/hooks/useFetch";
import IRenting from "../../types/renting.type";
import { Key } from "react-hook-form/dist/types/path/common";
import { BiPencil } from "react-icons/bi";
import { format } from "date-fns";

const RentingListPage: React.FC<unknown> = () => {
    const { data: rentings, reFetch } = useFetch("/rentings");

    const rentingVehicle = "";

    console.log(rentings);

    return (
        <Layout>
            <div className="space-y-5">
                <div className="flex items-center gap-2 text-3xl text-blue-primary">
                    <p className="font-semibold ">Liste des véhicules</p>
                    <MdOutlineCarRental />
                </div>
                <div>
                    <NavLink to="/" className="flex items-center space-x-1">
                        <HiOutlineArrowNarrowLeft className="mt-1" />
                        <p>retour</p>
                    </NavLink>
                </div>
                <div>
                    <p>Retrouvez la liste des locations</p>
                </div>
                <div>
                    <NavLink
                        to={`/renting`}
                        className="flex items-center gap-4 px-4 py-2 text-center text-white bg-green-500 border rounded-full hover:bg-green-600 w-fit"
                    >
                        <AiOutlinePlusCircle className="w-8 h-8" />
                        Ajouter une location
                    </NavLink>
                </div>
                <div>
                    {rentings.map((renting: IRenting, key: Key) => (
                        <div
                            className="p-5 border rounded-lg border-blue-primary"
                            key={key}
                        >
                            <p>
                                Début :
                                {String(
                                    format(
                                        new Date(renting.start_date),
                                        "dd/MM/yyyy"
                                    )
                                )}
                            </p>
                            <p>
                                Fin :
                                {String(
                                    format(
                                        new Date(renting.end_date),
                                        "dd/MM/yyyy"
                                    )
                                )}
                            </p>
                            <p>{renting.pricing} €</p>

                            <div>
                                <p>actions: </p>
                                {/* <NavLink
                                    to={`/customer/${customer.id}/update`}
                                    className="flex items-center gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 w-fit"
                                >
                                    <BiPencil />
                                    modifier
                                </NavLink> */}
                                <NavLink
                                    to={`/renting/${renting.id}`}
                                    className="flex items-center gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 w-fit"
                                >
                                    <AiOutlineEye />
                                    Voir
                                </NavLink>
                                <button
                                    type="button"
                                    // onClick={() => onClickDelete(customer.id)}
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

export default RentingListPage;
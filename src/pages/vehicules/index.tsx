import React, { Key } from "react";
import useFetch from "../../api/hooks/useFetch";
import Layout from "../../component/UI/Layout/Layout";
import { AiFillCar, AiOutlineEye, AiOutlinePlusCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { TitleWithReturn } from "../../component/UI";
import VehiclesTable from "../../component/DisclosureArray/VehiclesTable";

const VehiculeListPage: React.FC<unknown> = () => {
    const { data: vehicles, reFetch } = useFetch("/vehicles");

    return (
        <Layout>
            <div className="space-y-5">
                <TitleWithReturn
                    title="Liste des véhicules"
                    icon={<AiFillCar />}
                />
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
                    <VehiclesTable vehicles={vehicles} reFetch={reFetch} />
                </div>
            </div>
        </Layout>
    );
};

export default VehiculeListPage;

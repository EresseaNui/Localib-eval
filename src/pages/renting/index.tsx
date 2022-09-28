import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Layout from "../../component/UI/Layout/Layout";
import { MdOutlineCarRental } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import useFetch from "../../api/hooks/useFetch";

const RentingListPage: React.FC<unknown> = () => {
    const { data: rentings, reFetch } = useFetch("/rentings");

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
                    {/* {rentings.map((renting: ImageBitmapRenderingContextSettings, key: Key))} */}
                </div>
            </div>
        </Layout>
    );
};

export default RentingListPage;

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Layout from "../../component/UI/Layout/Layout";
import { MdOutlineCarRental } from "react-icons/md";
import { AiOutlineEye, AiOutlinePlusCircle } from "react-icons/ai";
import useFetch from "../../api/hooks/useFetch";
import IRenting from "../../types/renting.type";
import { Key } from "react-hook-form/dist/types/path/common";
import { format } from "date-fns";
import { rentingService } from "../../services/rentingService";
import { TitleWithReturn } from "../../component/UI";
import RentingTable from "../../component/DisclosureArray/RentingTable";

const RentingListPage: React.FC<unknown> = () => {
    const { data: rentings, reFetch } = useFetch("/rentings");

    const onClickDelete = async (id: string): Promise<void> => {
        await rentingService.delete(id);
        reFetch();
    };

    return (
        <Layout>
            <div className="space-y-5">
                <TitleWithReturn
                    title="Liste des Locations"
                    icon={<MdOutlineCarRental />}
                />
                <div>
                    <p>Retrouvez l'historique des Locations</p>
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
                <RentingTable rentings={rentings} reFetch={reFetch} />
            </div>
        </Layout>
    );
};

export default RentingListPage;

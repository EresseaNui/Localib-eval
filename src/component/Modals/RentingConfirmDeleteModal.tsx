import React from "react";

import clsx from "clsx";
import { Modal } from "../Form/UI";
import IRenting from "../../types/renting.type";
import { rentingService } from "../../services/rentingService";
import { redirect } from "../../utils/redirect";
import { Button } from "../UI";

export interface RentingConfirmDeleteModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    renting: IRenting;
}

const RentingConfirmDeleteModal: React.FC<RentingConfirmDeleteModalProps> = ({
    renting,
    open,
    setOpen,
}) => {
    const onClickDelete = async (id: string): Promise<void> => {
        await rentingService.delete(id);
        redirect("/rentings");
    };
    return (
        <Modal
            open={open}
            setOpen={setOpen}
            closeButton
            title="Confirmez la suppression"
            size="max-w-2xl"
        >
            <div className="flex flex-col space-y-5">
                <p className="text-lg">
                    Voulez-vous supprimer cette location ?
                </p>
                <div className="flex pt-10 space-x-5">
                    <Button
                        type="button"
                        variant="outlined"
                        color="red"
                        onClick={() => onClickDelete(renting.id)}
                    >
                        Oui
                    </Button>
                    <Button
                        type="button"
                        color="green"
                        onClick={() => setOpen(false)}
                    >
                        Non !
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default RentingConfirmDeleteModal;

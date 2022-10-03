import React from "react";
import { customerService } from "../../services/customerService";
import ICustomer from "../../types/customer.type";
import { redirect } from "../../utils/redirect";
import { Modal } from "../Form/UI";
import { Button } from "../UI";

export interface CustomerConfirmDeleteModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    customer: ICustomer;
}

const CustomerConfirmDeleteModal: React.FC<CustomerConfirmDeleteModalProps> = ({
    customer,
    open,
    setOpen,
}) => {
    const onClickDelete = async (id: string): Promise<void> => {
        await customerService.delete(id);
        redirect("/customers");
    };
    return (
        <Modal
            open={open}
            setOpen={setOpen}
            closeButton
            title="Êtes-vous sur de vouloir nous quitter ?"
            size="max-w-2xl"
        >
            <div className="flex flex-col space-y-5">
                <p className="text-lg">Voulez-vous supprimer ce client ?</p>
                <div className="flex pt-10 space-x-5">
                    <Button
                        type="button"
                        variant="outlined"
                        color="red"
                        onClick={() => onClickDelete(customer.id)}
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

export default CustomerConfirmDeleteModal;

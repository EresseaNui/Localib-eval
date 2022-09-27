import React from "react";


import Layout from "../../component/UI/Layout/Layout";
import { useForm } from "react-hook-form";

export enum VehiculeType {
    VOITURE = "voiture",
    CAMION = "camion",
    MOTO = "moto",
    UTILITAIRE = "utilitaire",
}

export enum VehiculeEtat {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
}

interface RegisterPayload {
    type: VehiculeType;
    marque: string;
    modele: string;
    immatriculation: string;
    etat: VehiculeEtat;
    louer: boolean;
}

const NewVehiculePage: React.FC<unknown> = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<RegisterPayload>();

    const optionsType = [
        { value: "voiture", label: "Voiture" },
        { value: "camion", label: "Camion" },
        { value: "moto", label: "Moto" },
        { value: "utilitaire", label: "Utilitaire" },
    ];

    const onSubmit = (formValues: RegisterPayload): void => {
        console.log(formValues);
    };
    return (
        <Layout>
            <div>
                <div>Ajouter un nouveau véhicule</div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Type:</label>
                            <select>
                                <option>todo</option>
                            </select>
                            {errors.marque && (
                                <span className="text-red-600">
                                    *Champ obligatoire
                                </span>
                            )}
                        </div>
                        <div>
                            <label>Marque : </label>
                            <input
                                type="text"
                                {...register("marque", { required: true })}
                                className="border border-black"
                            />
                            {errors.marque && (
                                <span className="text-red-600">
                                    *Champ obligatoire
                                </span>
                            )}
                        </div>
                        <div>
                            <label>Modèle : </label>
                            <input
                                type="text"
                                {...register("modele", { required: true })}
                                className="border border-black"
                            />
                            {errors.modele && (
                                <span className="text-red-600">
                                    *Champ obligatoire
                                </span>
                            )}
                        </div>
                        <div>
                            <label>immatriculation : </label>
                            <input
                                type="text"
                                {...register("immatriculation", {
                                    required: true,
                                })}
                                className="border border-black"
                            />
                            {errors.immatriculation && (
                                <span className="text-red-600">
                                    *Champ obligatoire
                                </span>
                            )}
                        </div>
                        <button type="submit" className="border px-4 py-2">
                            Ajouter la voiture
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default NewVehiculePage;

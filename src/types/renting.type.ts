import ICustomer from "./customer.type";
import IVehicule from "./vehicule.type";

export default interface IRenting {
    id: string;
    customer: ICustomer;
    vehicle: IVehicule;
    start_date: Date;
    end_date: Date;
    pricing: number;
}

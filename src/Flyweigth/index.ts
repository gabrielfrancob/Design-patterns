import { deliveryContext } from "./Classes/DeliveryContext";
import { FactoryDelivery } from "./Classes/FactoryDelivery";

const factory = new FactoryDelivery();

deliveryContext(factory, "Gabriel", "20", "Rua do exemplo", "EX");
deliveryContext(factory, "Isabela", "20", "Rua do exemplo", "EX");
deliveryContext(factory, "Stevan", "5", "Rua do exemplo", "EX");
deliveryContext(factory, "Stevan", "5", "Rua do exemplo mudado", "EX");

console.log();
console.log(factory.getLocalidades());

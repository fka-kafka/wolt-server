import chargableAmount from "./chargableModule";
import minimumChargableAmount from "./minimumChargableModule";

function compute(
  cartValue: number,
  distance: number,
  items: number,
  day: string,
  time: number
) {
  let deliveryFee: number | boolean = 0;

  if (cartValue > 10 && cartValue < 200) {
    return (deliveryFee = chargableAmount(distance, items, day, time));
  } else if (cartValue < 10) {
    return (deliveryFee = minimumChargableAmount(
      cartValue,
      distance,
      items,
      day,
      time
    ));
  } else deliveryFee = 0;

  return deliveryFee;
}

export default compute;

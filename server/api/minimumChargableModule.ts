let distanceCharge: number = 0;
let surcharge: number = 0;
let maxDeliveryFee: number = 15;
let total: number = 0;
let deliveryFee: number | boolean = 0;

const minimumChargableAmount = (
  cartValue: number,
  distance: number,
  items: number,
  day: string,
  time: number
) => {
  distance <= 1000
    ? (distanceCharge = 2)
    : (distance - 1000) % 500 === 0 && distance !== 0
    ? (distanceCharge = 2 + ((distance - 1000) / 500) * 2)
    : Math.round((distance - 1000) / 1000) > (distance - 1000) / 1000
    ? (distanceCharge = 2 + Math.round((distance - 1000) / 1000) * 2)
    : (distanceCharge = 2 + Math.round((distance - 1000) / 1000) * 2 + 1);

  items >= 5 && items < 12
    ? (surcharge = (items - 4) * 0.5)
    : items >= 5 && items > 12
    ? (surcharge = (items - 4) * 0.5 + 1.2)
    : (surcharge = 0);

  day === "Friday" && time >= 15 && time <= 18
    ? (total = (surcharge + distanceCharge + (10 - cartValue)) * 1.2)
    : (total = surcharge + distanceCharge + (10 - cartValue));

  if (total > maxDeliveryFee) {
    return (deliveryFee = false);
  } else return (deliveryFee = total);
};

export default minimumChargableAmount;

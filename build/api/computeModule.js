"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compute(cartValue, distance, items, day, time) {
    let distanceCharge = 0;
    let surcharge = 0;
    let maxDeliveryFee = 15;
    let total = 0;
    let deliveryFee = null;
    if (cartValue > 10 && cartValue < 200) {
        (distance <= 1000)
            ? distanceCharge = 2
            :
                (((distance - 1000) % 500) > 0)
                    ? distanceCharge = 2 + Math.floor(((distance - 1000) / 500)) + 1
                    : distanceCharge = 2 + Math.floor(((distance - 1000) / 500));
        (items >= 5 && items < 12)
            ? surcharge = (items - 4) * 0.5
            :
                (items >= 5 && items > 12)
                    ? surcharge = ((items - 4) * 0.5) + 1.2
                    : surcharge = 0;
        (day === 'Friday' && time === 15)
            ? total = (surcharge + distanceCharge) * 1.2
            : total = surcharge + distanceCharge;
        if (total > maxDeliveryFee) {
            return deliveryFee = false;
        }
        else
            return deliveryFee = total;
    }
    else if (cartValue < 10) {
        (distance <= 1000)
            ? distanceCharge = 2
            :
                (((distance - 1000) % 500) > 0)
                    ? distanceCharge = 2 + Math.floor(((distance - 1000) / 500)) + 1
                    : distanceCharge = 2 + Math.floor(((distance - 1000) / 500));
        (items >= 5 && items < 12)
            ? surcharge = (items - 4) * 0.5
            :
                (items >= 5 && items > 12)
                    ? surcharge = ((items - 4) * 0.5) + 1.2
                    : surcharge = 0;
        (day === 'Friday' && time === 15)
            ? total = (surcharge + distanceCharge + (10 - cartValue)) * 1.2
            : total = surcharge + distanceCharge + (10 - cartValue);
        if (total > maxDeliveryFee) {
            return deliveryFee = false;
        }
        else
            return deliveryFee = total;
    }
    else
        deliveryFee = 0;
    return deliveryFee;
}
exports.default = compute;

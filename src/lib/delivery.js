export const FREE_DELIVERY_MIN = 5000;
export const DELIVERY_FEE = 200;

export function getDelivery(subtotal) {
  return subtotal >= FREE_DELIVERY_MIN ? 0 : DELIVERY_FEE;
}
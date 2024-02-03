function toFarsiNumber(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
}
export function formatPrice(price) {
  return toFarsiNumber(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}

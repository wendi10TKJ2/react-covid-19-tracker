export default function formatCount(int = 0) {
  if (typeof int === "number") {
    return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

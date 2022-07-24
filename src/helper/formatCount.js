export default function formatCount(int) {
  if (int !== null && typeof int === "number") {
    return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return 0;
}

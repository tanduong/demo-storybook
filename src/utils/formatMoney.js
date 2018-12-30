export default function formatDollar(amount) {
  return amount.toLocaleString(undefined, {maximumFractionDigits: 2});
}

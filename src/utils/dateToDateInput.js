export default function dateToDateInput(input) {
  const day = input.getDate().toString().padStart(2, "0");
  const month = (input.getMonth() + 1).toString().padStart(2, "0");
  const year = input.getFullYear();
  const hour = input.getHours().toString().padStart(2, "0");
  const minute = input.getMinutes().toString().padStart(2, "0");
  return `${year}-${month}-${day}T${hour}:${minute}`;
}
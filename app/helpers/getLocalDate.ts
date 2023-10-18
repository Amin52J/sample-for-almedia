type DateOptions = {
  day: "2-digit";
  month: "2-digit";
  year: "numeric";
};

const dateOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

export default function getLocalDate(value: string): string {
  if (!value) return null;
  const dateInfo = new Date(value);
  return dateInfo.toLocaleDateString("de-DE", dateOptions as DateOptions);
}

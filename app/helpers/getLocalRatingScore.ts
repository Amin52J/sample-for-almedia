export default function getLocalRatingScore(score: number | null): string {
  if (!score) return "";
  return `
    ${score.toLocaleString("de-DE", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}
  `;
}

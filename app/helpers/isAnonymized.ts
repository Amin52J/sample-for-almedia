export default function isAnonymized(value: string) {
  return !value || /\*+/.test(value);
}

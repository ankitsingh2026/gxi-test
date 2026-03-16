export function cleanHTML(html: string) {
  if (!html) return "";

  return html
    .replace(/background-color:\s*[^;"]+;?/gi, "")
    .replace(/color:\s*[^;"]+;?/gi, "")
    .replace(/font-size:\s*[^;"]+;?/gi, "");
}

export function formatEmploymentType(type: string) {
  if (!type) return "Unknown";

  return type
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function matchExperienceLevel(exp: number | string, selectedLevel: string) {
  if (!exp || selectedLevel === "All") return true;

  const years = Number(exp);

  switch (selectedLevel) {
    case "Fresher (0-1)":
      return years >= 0 && years <= 1;

    case "Entry Level (1-3)":
      return years > 1 && years <= 3;

    case "Mid Level (3-5)":
      return years > 3 && years <= 5;

    case "Senior Level (5+)":
      return years > 5;

    default:
      return true;
  }
}

export function getExperienceLabel(exp: number | string) {
  if (exp === null || exp === undefined) return null;

  const years = Number(exp);

  if (years <= 1) return "Fresher (0-1)";
  if (years <= 3) return "Entry Level (1-3)";
  if (years <= 5) return "Mid Level (3-5)";

  return "Senior Level (5+)";
}
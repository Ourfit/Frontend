export default function getTimeSlot(
  timeKey: string,
): "morning" | "afternoon" | "evening" | "" {
  if (timeKey.includes("MORNING")) return "morning";
  if (timeKey.includes("AFTERNOON")) return "afternoon";
  if (timeKey.includes("EVENING")) return "evening";
  return "";
}

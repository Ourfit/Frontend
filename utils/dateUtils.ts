export const calculateDaysElapsed = (startDate: string): number => {
  const start = new Date(startDate);
  const today = new Date();
  const timeDifference = today.getTime() - start.getTime();
  const daysElapsed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysElapsed;
};

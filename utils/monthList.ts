export const monthList = (nowDate: Date) => {
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth();

  const dayOneWeek = new Date(nowYear, nowMonth, 1).getDay();
  const dayLastWeek = new Date(nowYear, nowMonth + 1, 0).getDay();

  const result: Date[] = [];
  const prevMonthEnd = new Date(nowYear, nowMonth, 0).getDate();
  const nowMonthEnd = new Date(nowYear, nowMonth + 1, 0).getDate();

  const adjustedDayOneWeek = dayOneWeek === 0 ? 6 : dayOneWeek - 1;
  const adjustedDayLastWeek = dayLastWeek === 0 ? 6 : dayLastWeek - 1;

  for (let i = adjustedDayOneWeek - 1; i >= 0; i--) {
    result.push(new Date(nowYear, nowMonth - 1, prevMonthEnd - i));
  }

  for (let i = 1; i <= nowMonthEnd; i++) {
    result.push(new Date(nowYear, nowMonth, i));
  }

  for (let i = 1; i < 7 - adjustedDayLastWeek; i++) {
    result.push(new Date(nowYear, nowMonth + 1, i));
  }

  return result;
};

export const selectCalendarList = (date?: Date) => {
  if (date) {
    const startDate = date;
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    const months = Array.from(
      {
        length:
          (currentYear - startYear) * 12 + (currentMonth - startMonth) + 12,
      },
      (_, i) => {
        const year = startYear + Math.floor((startMonth + i - 1) / 12);
        const month = ((startMonth + i - 1) % 12) + 1;
        return `${year}. ${month.toString().padStart(2, "0")}`;
      },
    );

    return months;
  } else {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return Array.from(
      { length: 12 },
      (_, i) =>
        `${month + i > 12 ? year + 1 : year}. ${((month + i) % 12 || 12).toString().padStart(2, "0")}`,
    );
  }
};

export const dateFormat = (date: Date, type?: string) => {
  const formatMonth = `${date.getMonth() + 1}`.padStart(2, "0");
  const formatDate = `${date.getDate()}`.padStart(2, "0");

  if (type === "MD") {
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  }

  if (type === "alarm") {
    return `${date.getFullYear()}.${formatMonth}.${formatDate}`;
  }

  return `${date.getFullYear()}-${formatMonth}-${formatDate}`;
};

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

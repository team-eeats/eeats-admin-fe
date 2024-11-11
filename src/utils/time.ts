/**
 * 업로드된지 얼마나 되었는지 날짜 반환 ex)1일전
 */

export function timeForToday(value: string) {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
      return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
}

/**
 * 하루가 지났다면 true 반환
 */

export function passOneDay(value: string) {
  const today = new Date()
  const timeValue = new Date(value)

  const difference = today.getTime() - timeValue.getTime();

  const oneDay = 24 * 60 * 60 * 1000;

  return difference >= oneDay;
}
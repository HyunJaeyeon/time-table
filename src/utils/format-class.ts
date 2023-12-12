const splitDayTime = (time: string) => {
  const times = time.split(','); // 여러개 나누기
  return times.map((classTime) => classTime.split('/')); // 요일, 시간으로 나누기
};

const getTime = (time: string) => time.split('-').map(Number);

const getRange = (time: string) => {
  const times = getTime(time);

  if (times.length === 1) return times;

  const [start, end] = times;
  const size = end - start + 1;

  return Array(size)
    .fill(start)
    .map((x: number, y: number) => x + y);
};

const formatMyClass = (time: string) => {
  const dayTimes = splitDayTime(time);
  const days = dayTimes.map((dayTime) => dayTime[0]);
  const times = dayTimes.map((dayTime) => getRange(dayTime[1]));
  return { days, times };
};

export default formatMyClass;

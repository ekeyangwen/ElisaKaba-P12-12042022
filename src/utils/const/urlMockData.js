export const urlMockData = {
  userMainData(id) {
    return `../data/dataInfoUser${id}.json`;
  },
  userAverageData(id) {
    return `../data/${id}/average-sessions.json`;
  },
  userActivityData(id) {
    return `../data/${id}/activity.json`;
  },
  userPerformanceData(id) {
    return `../data/${id}/performance.json`;
  },
};

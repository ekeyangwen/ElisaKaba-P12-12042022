export const urlMockData = {
  userMainData(id) {
    return `../data/dataInfoUser${id}.json`;
  },
  userAverageData(id) {
    return `../data/${id}/dataAverageUser.json`;
  },
  userActivityData(id) {
    return `../data/${id}/dataActivityUser.json`;
  },
  userPerformanceData(id) {
    return `../data/${id}/dataPerformanceUser.json`;
  },
};

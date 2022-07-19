export const urlApi = {
  userMainData(id) {
    return `http://localhost:3000/user/${id}`;
  },
  userAverageData(id) {
    return `http://localhost:3000/user/${id}/average-sessions`;
  },
  userActivityData(id) {
    return `http://localhost:3000/user/${id}/activity`;
  },
  userPerformanceData(id) {
    return `http://localhost:3000/user/${id}/performance`;
  },
};

import AverageData from "../class/AverageData";
import PerformanceData from "../class/PerformanceData";
import ActivityData from "../class/ActivityData";
import MainData from "../class/MainData";

/**
 *
 * @param {string} url
 * @param {object} result
 * @returns the result of the class compared ti the url
 */
export const ConvertData = (url, result) => {
  if (url.includes("performance")) {
    return new PerformanceData(
      result.data.id,
      result.data.kind,
      result.data.data
    );
  }
  if (url.includes("average-sessions")) {
    return new AverageData(result.data.userId, result.data.sessions);
  }
  if (url.includes("activity")) {
    return new ActivityData(result.data.userId, result.data.sessions);
  }
  return new MainData(
    result.data.id,
    result.data.userInfos,
    result.data.todayScore,
    result.data.score,
    result.data.keyData
  );
};

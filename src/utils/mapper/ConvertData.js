import AverageData from "../class/AverageData";
import PerformanceData from "../class/PerformanceData";
import ActivityData from "../class/ActivityData";
import MainData from "../class/MainData";

export const ConvertData = (url, result) => {
  console.log("URL:", url);

  if (url.includes("dataInfoUser")) {
    return new MainData(
      result.data.id,
      result.data.userInfos,
      result.data.todayScore,
      result.data.score,
      result.data.keyData
    );
  }

  if (url.includes("dataPerformanceUser" || "performance")) {
    return new PerformanceData(
      result.data.userId,
      result.data.kind,
      result.data.data
    );
  }
  if (url.includes("dataAverageUser" || "average-sessions")) {
    return new AverageData(result.data.userId, result.data.sessions);
  }
  if (url.includes("dataActivityUser" || "activity")) {
    return new ActivityData(result.data.userId, result.data.sessions);
  }
};

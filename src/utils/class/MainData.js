export default class MainData {
  /**
   * User Main Data class
   *@param {number} id
   *@param {object} userInfos
   *@param {string} userInfos.firstName
   *@param {string} userInfos.lastName
   *@param {string} userInfos.age
   *@param {number} todayScore
   */
  constructor(id, userInfos, score, todayScore, keyData) {
    this.id = id;
    this.userInfos = userInfos;
    this.todayScore = todayScore;
    this.score = score;
    this.keyData = keyData;
  }
}

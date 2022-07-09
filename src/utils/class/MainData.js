export default class MainData {
  /**
   * User Main Data class
   *@param {number} id
   *@param {object} userInfos
   *@param {string} userInfos.firstName
   *@param {string} userInfos.lastName
   *@param {string} userInfos.age
   *@param {number} todayScore
   *@param {object} keyData
   */
  constructor(id, userInfos, todayScore, keyData) {
    this.id = id;
    this.userInfos = userInfos;
    this.todayScore = todayScore;
    this.keyData = keyData;
  }
}

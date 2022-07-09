export default class PerformanceData {
  /**
   * User Performance Data class
   *@param {number} userId
   *@param {object} kind
   *@param {array} data
   */
  constructor(userId, kind, data) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }
}

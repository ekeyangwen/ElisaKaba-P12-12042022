export default class AverageData {
  /**
   * User Average Data class
   *@param {number} userId
   *@param {array} sessions
   */
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
  }
}

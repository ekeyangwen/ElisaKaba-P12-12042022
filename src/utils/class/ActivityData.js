export default class ActivityData {
  /**
   * User Activity Data class
   *@param {number} userId
   *@param {array} sessions
   */
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
  }
}

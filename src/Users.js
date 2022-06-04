export class users {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }
  createWelcomeName() {
    return `
    <section className="horizontalNavbar">
    <h1 className="bonjour">
        Bonjour ${this.firstName}!
    </h1>
    <h2 className="felicitation">Félicitation ! Vous avez explosé vos objectifs hier 👏<h2>
    <section>
    `;
  }
}

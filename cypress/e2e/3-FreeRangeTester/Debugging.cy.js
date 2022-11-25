describe("Utilidades para debugging con Cypress", () => {
  it("cy.log", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.log("Escribe el username");
    cy.get("#username").type("tomsmith");
    cy.log("Escribe el passwd");
    cy.get("#password").type("SuperSecretPassword!").debug(); //debug() Brinda informacion de la ejecucion
    cy.log("Hace click en el boton de login");
    cy.get("form").contains("Login").click();
    cy.url().should("contain", "/secure");
  });
});

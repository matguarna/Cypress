describe("Trabajando con plantillas modales", () => {
  it("Valido el texto de un elemento dentro del iframe", () => {
    cy.visit("http://www.webdriveruniversity.com/IFrame/index.html");
    cy.get("#frame").iframe("body #button-find-out-more > b").should("include.text", "Find Out More!");
  });
});

describe("Pruebas sobre UI", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com");
  });

  //   it("Ejemplo de esperas", () => {
  //     cy.wait(1000);
  //     cy.contains("Challenging DOM").click();
  //   });

  it("Nueva pestaña", () => {
    cy.contains("Multiple Windows").click();
    cy.contains("Click Here").invoke("removeAttr", "target").click();
    cy.contains("New Window").should("have.text", "New Window");
  });
});

describe("Pruebas sobre UI", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com");
  });

  it("Ejemplo de click", () => {
    cy.contains("Add/Remove Elements").click();
    cy.get('[onclick="addElement()"]').click();
  });

  it("Ejemplo de escritura", () => {
    cy.contains("Form Authentication").click();
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
  });

  it("Ejemplo de checkboxes", () => {
    cy.contains("Checkboxes").click();
    cy.get("#checkboxes > :nth-child(1)").check();
    cy.get("#checkboxes > :nth-child(3)").uncheck();
    //se puede usar click() pero checkea o descheckea segun como esté el checkbox, es mas exacto check/uncheck
  });

  it("Elegir de un drowdown", () => {
    cy.contains("Dropdown").click();
    cy.get("#dropdown").select(1); //Se puede pasar el "index" indicandole la posicion, por ejemplo: 1, o el texto exacto de la opcion: "Option 1"
  });

  it("Ejemplo de clear", () => {
    cy.contains("Form Authentication").click();
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("#password").clear();
  });

  it("Hover sobre el elemento", () => {
    cy.contains("Hovers").click();
    cy.get("#content > div > div:nth-child(4) > div > a").click({ force: true }); //Se forza el click en el elemento oculto con la propiedad force en true
    //OPCION 2
    //cy.get("#content > div > div:nth-child(4) > div").invoke("show").contains("View profile").click();
  });

  it.only("Ejemplo de click derecho", () => {
    cy.contains("Context Menu").click();
    cy.get("#hot-spot").rightclick();
    //cy.get("#hot-spot").invoke("trigger", "contextmenu"); //Esta es otra opcion para invocar la alerta
    cy.on("window:alert", (alert) => {
      expect(alert).to.equal("You selected a context menu"); //Valida el texto de la alerta
    });
  });
});

describe("Sesiones y cookies", () => {
  it("Sin sesion guardada", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("form").contains("Login").click();
    cy.url().should("contains", "/secure");
  });

  //Para usar session se habilita desde cypress.config.js ya que esta en modo experimental
  //
  //     experimentalSessionAndOrigin: true,
  //     experimnentalSessionSupport: true
  //
  it("Guardando una session", () => {
    cy.session("Tom", () => {
      cy.visit("https://the-internet.herokuapp.com/login");
      cy.get("#username").type("tomsmith");
      cy.get("#password").type("SuperSecretPassword!");
      cy.get("form").contains("Login").click();
      cy.url().should("contains", "/secure");
    });
  });

  it("Guardando una session y manejo de cookies", () => {
    cy.session("Tom", () => {
      cy.visit("https://the-internet.herokuapp.com/login");
      cy.get("#username").type("tomsmith");
      cy.get("#password").type("SuperSecretPassword!");
      cy.get("form").contains("Login").click();
      cy.url().should("contains", "/secure");
      cy.getCookies()
        .should("have.length", 5)
        .then((cookies) => {
          expect(cookies[0]).to.have.property("name", "optimizelyPendingLogEvents");
        });
    });
  });

  it("Guardando una session y manejo de una sola cookie", () => {
    cy.session("Tom", () => {
      cy.visit("https://the-internet.herokuapp.com/login");
      cy.get("#username").type("tomsmith");
      cy.get("#password").type("SuperSecretPassword!");
      cy.get("form").contains("Login").click();
      cy.url().should("contains", "/secure");
      cy.getCookie("optimizelyPendingLogEvents").should("exist");
      cy.getCookie("optimizelyPendingLogEvents").should("not.have.property", "value", "asd123"); //Se puede usar al revés (have.property) con un value erroneo para conocer el verdadero
      cy.getCookie("optimizelyPendingLogEvents").should("not.be.null"); //Valida que no está vacia la cookie
      cy.clearCookie("optimizelyPendingLogEvents"); //Traemos la cookie para borrarla
      cy.getCookie("optimizelyPendingLogEvents").should("not.exist"); //Validamos que fue borrada
    });
  });

  it("Limpiar todas las cookies", () => {
    cy.session("Tom", () => {
      cy.visit("https://the-internet.herokuapp.com/login");
      cy.get("#username").type("tomsmith");
      cy.get("#password").type("SuperSecretPassword!");
      cy.get("form").contains("Login").click();
      cy.url().should("contains", "/secure");
      cy.getCookies()
        .should("have.length", 5)
        .then((cookies) => {
          expect(cookies[0]).to.have.property("name", "optimizelyPendingLogEvents");
        });
    });
    cy.clearCookies();
    cy.getCookies().should("have.length", 0);
  });

  it("Setear cookies", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("form").contains("Login").click();
    cy.url().should("contains", "/secure");
    cy.setCookie("CookieLoca", "Oreo");
    cy.getCookie("CookieLoca").should("have.property", "value", "Oreo");
  });
});

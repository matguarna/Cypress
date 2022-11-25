describe("Loguear - Basic Auth y Auth con forms", () => {
  //DB Seeding usando el comando task
  // beforeEach(() => {
  //   //db:teardown es un nombre que se da para borrar todo lo que estuvimos haciendo
  //   cy.task("db:teardown"); //Borra todo y deja limpio
  //   cy.task("db:seeding"); //Carga los datos del db seeding
  // });

  it("Sin loguear", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth");
    cy.get("p").should("include.text", "Congratulations");
  });

  it("Loguear usando ath de Cypress", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });
    cy.get("p").should("include.text", "Congratulations");
  });

  //Opcion no recomendada porque brinda las credenciales en la url
  it("Loguear con credenciales en la URL del visit", () => {
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get("p").should("include.text", "Congratulations");
  });

  it("Hacer login en un form, usando request tipo POST", () => {
    cy.visit("https://the-internet.herokuapp.com");
    cy.request({
      method: "POST",
      url: "/authenticate",
      form: true,
      body: {
        username: "tomsmith",
        password: "SuperSecretPassword!",
      },
    });
    cy.getCookie("rack.session").should("exist");
    cy.visit("https://the-internet.herokuapp.com/secure");
    cy.get(".subheader").should("include.text", "Welcome to the Secure Area");
  });
});

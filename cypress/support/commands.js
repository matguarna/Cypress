// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command -- Este comando no va encadenado a nadie
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --  Este comando debe ir encadenado a otro comando
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Agregando comando hijo - child
Cypress.Commands.add("iframe", { prevSubject: "element" }, ($iframe, selector) => {
  //prevSubject indica que va a estar encadenado a un elemento, esto viene despues del cy.get, en el cy.get vamos a traer el iframe.
  Cypress.log({
    name: "iframe",
    consoleProps() {
      return {
        iframe: $iframe,
      };
    },
  });
  return new Cypress.Promise((resolve) => {
    resolve($iframe.contents().find(selector));
  });
});

//Creando comando login - Es un comando padre
Cypress.Commands.add("login", (username, password) => {
  cy.visit("https://the-internet.herokuapp.com");
  cy.request({
    method: "POST",
    url: "/authenticate",
    form: true,
    body: {
      username,
      password
    },
  });
  cy.getCookie("rack.session").should("exist");
  cy.visit("https://the-internet.herokuapp.com/secure");
});

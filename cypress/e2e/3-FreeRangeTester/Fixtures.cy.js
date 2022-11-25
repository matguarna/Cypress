describe("Ejemplos con Fixtures", () => {
  before(function () {
    //before se ejecuta una sola vez, a diferencia de beforeEach
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.fixture("credenciales.json").then(function (testdata) {
      this.testdata = testdata;
    });
  });
  //Importante usar la palabra function en el it si el then tiene function
  it("Validate successful login", function () {
    cy.get("#username").type(this.testdata.username);
    cy.get("#password").type(this.testdata.password);
    cy.get("form").contains("Login").click();
    cy.url().should("contains", "/secure");
  });
});

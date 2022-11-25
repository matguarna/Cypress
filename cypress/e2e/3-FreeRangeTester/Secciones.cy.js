const testData = require("../../fixtures/titulos.json");

testData.forEach((testData) => {
  describe("El titulo es el correcto para cada subpágina en Free Range Testers", () => {
    it("Valida que " + testData.Title + " sea el titulo de " + testData.Location + "", () => {
      cy.visit(testData.Location);
      cy.title().should("include", testData.Title);
    });
  });
});

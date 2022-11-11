describe("Home de www.freerangetesters.com", () => {
  beforeEach(() => {
    cy.visit("https://www.freerangetesters.com/");
  });

  it("should have a title", () => {
    cy.title().should("include", "Free Range Testers");
  });

  it("Click en cursos", () => {
    //Trae el elemento por su XPATH, y no por su css selector (cy.get)
    cy.xpath('//*[@id="comp-l02x1m8d2label"]').click();
  });

  it("find by text", () => {
    //Trae un elemento el cual su string contenga la palabra especificada en contains
    cy.contains("Blog");
  });
});

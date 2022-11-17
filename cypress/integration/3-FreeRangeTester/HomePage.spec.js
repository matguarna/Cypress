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
    cy.contains("Blog").should("be.visible").should("have.css", "font-family");
  });

  it("Hay 12 cursos", () => {
    cy.get("#comp-l02x1m8d2label").click(); //Click en Cursos
    cy.get('[data-testid="linkElement"] > ._1Qjd7').should("have.length", 12);
  });

  it("El campo Nombre del formulario posee clase '_1SOvY has-custom-focus'", () => {
    cy.get("#input_comp-l1ed927d").should("have.class", "_1SOvY has-custom-focus");
  });

  it("Hay un link llamado Blog en la barra nav", () => {
    cy.get("#comp-l02x1m8d1label").should("have.text", "Blog");
  });

  it.only("Existe un boton de 'Empezá a aprender' en el home", () => {
    //cy.wait(2000); //Espera 2 segundos y luego realiza el get
    cy.get('#comp-krjarw4p > [data-testid="linkElement"] > ._1Qjd7').should("exist");
  });

  
});

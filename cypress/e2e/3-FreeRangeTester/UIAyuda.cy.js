describe("Pruebas sobre UI", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com");
  });

  it("Ejemplo de esperas", () => {
    cy.wait(1000);
    cy.contains("Challenging DOM").click();
  });

  it("Nueva pestaña", () => {
    cy.contains("Multiple Windows").click();
    cy.contains("Click Here").invoke("removeAttr", "target").click();
    cy.contains("New Window").should("be.visible");
  });

  it("Shadow DOM", () => {
    cy.contains("Shadow DOM").click();
    cy.get("ul > li:nth-child(2)").should("have.text", "In a list!");
  });

  it("Primer y ultimo elemento", () => {
    cy.contains("Dynamic Content").click();
    cy.get("img").first().should("be.visible"); //Se puede validar con .first() y .last() o img:first y img:last.
  });

  it("Validar elemento segun su posicion", () => {
    cy.contains("Dynamic Content").click();
    cy.get("img").eq(2).should("be.visible"); // Con .eq(2) valida la segunda imagen, o el numero entero que se indique, hace referencia a la posicion.
  });

  it("Padres e hijos", () => {
    cy.contains("Dynamic Content").click();
    cy.get(":nth-child(4) > .large-2").parent(); //trae al elemento padre del get
    cy.get(":nth-child(7) > #content").children(); //trae al elemento hijo del get
  });

  // it("Invoke", () => {
  //   //La funcion invoke permite invocar funciones sobre elementos
  //   cy.contains("Dynamic Content").should("be.hidden").invoke("show").should("be.visible"); //Hace visible un elemento que estaba invisible
  // });
});

describe("Tablas estaticas y dinamicas", () => {
  it("Validamos texto en una tabla estatica", () => {
    cy.visit("https://sqengineer.com/practice-sites/practice-tables-selenium/");
    //Ubicamos la primer columna
    cy.get("#table1 > tbody > tr > td:nth-child(1)").each(($elm, index, $list) => {
      //Agarramos el texto de cada elemento en la columna 1
      const t = $elm.text();
      //Le indicamos que estamos buscando que incluya
      if (t.includes("Ranorex")) {
        //De aca vamos al elemento que le sigue en el DOM.
        cy.get("#table1 > tbody > tr > td:nth-child(1)")
          .eq(index)
          .next()
          .then(function (p) {
            //Tomamos el texto del elemento proximo
            const r = p.text();
            //Se valida el texto del elemento
            expect(r).to.contains("Commercial");
          });
      }
    });
  });

  it.only("Validacion en Tabla dinamica", () => {
    cy.visit("https://chercher.tech/practice/dynamic-table");
    cy.contains("td", "facebook.com").prev().find("input").check();
  });

  it.only("Validacion en Tabla dinamica", () => {
    cy.visit("https://sqengineer.com/practice-sites/practice-tables-selenium/");
    cy.contains("td", "Ranorex").next().should("have.text", "Commercial");
  });
});

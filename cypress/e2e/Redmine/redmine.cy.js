describe("redmine", () => {
  it("Redmine pantalla negra", () => {
    cy.visit("https://redmine.dguiaf-gcba.gov.ar");
    // cy.request({
    //   method: "POST",
    //   url: "/login",
    //   //form: true,
    //   body: {
    //     username: "mnguarna",
    //     password: "Enero.2021",
    //     //login: "Acceder",
    //   },
    // });
    cy.get("#username").type("MNGUARNA");
    cy.get("#password").type("Enero.2021");
    cy.get("#autologin").check();
    cy.contains("Acceder").click();
    cy.get(".projects").click();
    cy.get("#main-menu > ul > li:nth-child(3) > a").click();
    cy.get("#content > div.contextual > a").click();
    cy.get("#issue_project_id").select("Mesa SIR");
    cy.wait(1000);
    cy.get("#issue_subject").type("TAS - Pantalla negra");
    cy.get("#issue_description").type(
      "Estimados, se genera el presente redmine debido a que se visualiza por dameware en pantalla negra el TAS "
    );
    cy.get("#issue_category_id").select(1);
    cy.get("#issue_assigned_to_id").select("G- MDA SIR");
    cy.wait(1000);
    cy.get("#issue_custom_field_values_106").select("Media");
    cy.get("#issue_custom_field_values_156").select(1);
    cy.get("#issue_custom_field_values_62").type("MDA SIR");
    cy.get("#issue_custom_field_values_150").select("25. ATM DGUIAF");
    cy.get("#issue_custom_field_values_46").select("25.2. Pantalla principal");
  });
});

class FreeRangeHome {
  navigateToHome() {
    cy.visit("https://www.freerangetesters.com/");
  }

  empezarButton() {
    return cy.get('#comp-krjarw4p > [data-testid="linkElement"] > ._1Qjd7');
  }
}

export default FreeRangeHome;

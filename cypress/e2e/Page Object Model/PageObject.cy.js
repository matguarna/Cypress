import FreeRangeHome from "../../pages/FreeRangeHome";

const home = new FreeRangeHome();

describe("Home de www.freerangetesters.com", () => {
  beforeEach(() => {
    home.navigateToHome();
  });

  it("El boton 'Empezá a aprender' existe", () => {
    home.empezarButton().should("exist");
  });
});

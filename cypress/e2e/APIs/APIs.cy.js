describe("Pruebas de API con Cypress", () => {
  //request utiliza el metodo GET
  it("El endpoint 'posts' responde con status 200", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/",
    }).then((respuesta) => {
      expect(respuesta.status).to.eq(200);
    });
  });

  it("El endpoint 'posts' tiene 100 entradas", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.request("/posts").its("body").should("have.length", 100);
  });

  it("Validar el title de posts/1", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    //Validamos el texto de una propiedad
    cy.request("/posts/1")
      .its("body")
      .should("have.property", "title", "sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
  });
});

describe("Pruebas POST", () => {
  it("El POST request funciona correctamente para el endpoint", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      userId: 1,
      id: 101,
      title: "Relatos salvajes",
      body: "Una pelicula argentina",
    }).then((respuesta) => {
      expect(respuesta.body).to.have.property("title", "Relatos salvajes");
    });
  });
});

//La diferencia entre PUT y POST: PUT siempre va a dar el mismo resultado (es idempotente), no importa cuantas veces se ejecute. el POST puede ir cambiando, y cambia el resultado.
describe("Pruebas PUT", () => {
  it("El PUT request funciona correctamente para el endpoint", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/2", {
      title: "Relatos salvajes",
      body: "Una pelicula argentina",
    }).then((respuesta) => {
      expect(respuesta.body).to.have.property("title", "Relatos salvajes");
    });
  });
});

describe("Pruebas DELETE", () => {
  it("El DELETE request funciona correctamente para el endpoint", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
  });
});

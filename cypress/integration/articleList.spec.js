describe("NY Times Articles App", () => {
  it("Visits the home page", () => {
    cy.visit("/");
    cy.contains("NY Times Most Popular Articles");
  });
});

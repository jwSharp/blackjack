describe("", () => {
  it("contains the students username in the h3 tag", () => {
    cy.visit("/");
    cy.url().then((url) => {
      const username = 2217070;
      cy.get("h3").should("contain", username);
    });
  });
  it("contains the word blackjack in the h1 tag", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Blackjack");
  });
});

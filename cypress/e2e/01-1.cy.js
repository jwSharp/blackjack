describe("", () => {
  it("contains the students username in the h3 tag", () => {
    cy.visit("/blackjack/");
    cy.url().then((url) => {
      const username = url.split("~")[1].split("/")[0];
      cy.get("h3").should("contain", username);
    });
  });
  it("contains the word blackjack in the h1 tag", () => {
    cy.visit("/blackjack/");
    cy.get("h1").should("contain", "Blackjack");
  });
});

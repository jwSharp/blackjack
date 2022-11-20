describe("Week 2 Day 1 Blackjack app homework", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("contains the required link tag in the head", () => {
    cy.get("head>link")
      .eq(2)
      .should("have.attr", "href")
      .should("match", "/about/i");
  });
  it("contains the game section, styled as required", () => {
    cy.desktop(); // we're comparing to calculated values
    cy.get("#game").should("have.css", "width").and("equal", "1000px");
    cy.get("#game").should("have.css", "height").and("equal", "240px");
    cy.get("#game").should("have.css", "float");
    cy.get("#game").find("h1").contains("Blackjack");
  });
  it("contains the why-us section, styled as required", () => {
    cy.desktop();
    cy.get("#why-us").should("have.css", "width").and("equal", "400px");
    cy.get("#why-us").should("have.css", "float");
    cy.get("#why-us").find("p").contains("Why");
    cy.mobile();
    cy.get("#why-us").should("have.css", "width").and("equal", "400px");
  });
  it("contains the call-to-action section, styled as required", () => {
    cy.desktop();
    cy.get("#call-to-action").should("have.css", "width").and("equal", "600px");
    cy.get("#call-to-action").should("have.css", "float");
    cy.get("#call-to-action").find("p").contains("Money");
    cy.get("#call-to-action").find("button").contains("Start Playing");
    cy.mobile();
    cy.get("#call-to-action").should("have.css", "width").and("equal", "400px");
  });
});
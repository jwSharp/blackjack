describe("blackjack table page homework activity", () => {
  beforeEach(() => {
    cy.visit("/table.html");
  });
  it("is titled properly", () => {
    cy.title().should("contain", "Gaming Table");
  });
  it("contains the footer from the landing page", () => {
    cy.get("footer").should("contain", "Classy Development");
  });
  it("contains the header from the landing page", () => {
    cy.get("header").find("nav").find("li").should("contain", "About");
    cy.get("header").find("nav").find("li").should("contain", "Table");
  });
  it("contains the required sections", () => {
    cy.get("section").contains("Dealer").siblings("ol");
    cy.get("section").contains("Player").siblings("ol");
    // there's probably a way to do this as a oneliner
    cy.get("section")
      .contains("Option")
      .siblings("dl")
      .find("dt")
      .should("contain", "Hit");
    cy.get("section")
      .contains("Option")
      .siblings("dl")
      .find("dt")
      .should("contain", "Stand");
    cy.get("section")
      .contains("Option")
      .siblings("dl")
      .find("dt")
      .should("contain", "Split");
  });
});
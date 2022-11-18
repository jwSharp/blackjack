describe("blackjack home page in class practice activity", () => {
  describe("the rules page", () => {
    beforeEach(() => {
      cy.visit("/rules.html");
    });
    it("contains the required heading", () => {
      cy.get("article").find("h1").contains("Rules of Blackjack");
    });
    it("contains the required content", () => {
      cy.get("article").find("p").contains("busting");
    });
    it("contains the link to table ", () => {
      cy.get("header")
        .find("nav")
        .find("li")
        .contains("Table")
        .invoke("attr", "href")
        .should("contain", "./table");
    });
    it("contains the link to about", () => {
      cy.get("header")
        .find("nav")
        .find("li")
        .contains("About")
        .invoke("attr", "href")
        .should("contain", "./index");
    });
  });

  describe("the about page", () => {
    beforeEach(() => {
      cy.visit("/index.html");
    });
    it("has had the Rules section removed ", () => {
      cy.get("section").should("not.contain", "Rules");
    });
    it("contains the link to table ", () => {
      cy.get("header")
        .find("nav")
        .find("li")
        .contains("Table")
        .invoke("attr", "href")
        .should("contain", "./table");
    });
    it("contains the link to rules", () => {
      cy.get("header")
        .find("nav")
        .find("li")
        .contains("Rules")
        .invoke("attr", "href")
        .should("contain", "./rules");
    });
  });

  describe("the table page", () => {
    beforeEach(() => {
      cy.visit("/table.html");
    });
    it("contains the link to about ", () => {
      cy.get("header")
        .find("nav")
        .find("li")
        .contains("About")
        .invoke("attr", "href")
        .should("contain", "./index");
    });
    it("contains the link to rules", () => {
      cy.get("header")
        .find("nav")
        .find("li")
        .contains("Rules")
        .invoke("attr", "href")
        .should("contain", "./rules");
    });
  });
});

describe("Checks board conditions", () => {
  afterEach(() => {
    cy.get(".chess-board-container").first().scrollIntoView();
  });
  it("selects empty cell and it's highlighted", () => {
    cy.visit("/");
    cy.get("#status").should(
      "have.text",
      "Status: Select a cell to start highlighting"
    );
    cy.get(".chess-cell").last().click();

    cy.get("#status").should("have.text", "Status: Cell h8 selected");
    cy.get(".chess-cell").last().should("have.class", "selected-cell");
  });

  it("Selected cell is highlighted with selected-already class", () => {
    cy.visit("/");
    cy.get(".chess-cell").last().click();
    cy.get(".chess-cell").first().click();
    cy.get(".chess-cell").last().click();

    cy.get(".chess-cell").last().should("have.class", "selected-already");

    cy.get("#status").should("have.text", "Status: Cell h8 already selected");
  });

  it("Deselects the last selected cell", () => {
    cy.visit("/");
    cy.get(".chess-cell").last().prev().click();
    cy.get(".chess-cell").last().click();
    cy.get(".chess-cell").first().next().click();
    cy.get(".chess-cell").first().click();
    cy.get(".actions-ul").children().last().contains("a1");
    cy.get(".iconoir--cancel").click();
    cy.get(".actions-ul").children().should("have.length", 4);
    cy.get(".actions-ul").children().last().contains("a1").should("not.exist");
    cy.get("#status").should(
      "have.text",
      "Status: Removed last selected cell: a1"
    );
  });

  it("Reset board and all cells are empty", () => {
    cy.visit("/");
    cy.get(".reset-board-button").first().contains("Reset Board");
    cy.get(".reset-board-button").first().should("be.disabled");

    cy.get(".chess-cell").last().click();
    cy.get(".chess-cell").first().click();
    cy.get(".chess-cell").last().prev().click();
    cy.get(".chess-cell").first().next().click();

    cy.get(".actions-ul").children().should("have.length", 4);
    cy.get(".reset-board-button").first().should("not.be.disabled");
    cy.get(".reset-board-button").first().click();

    cy.get(".actions-ul").children().should("have.length", 0);

    cy.get("#status").should("have.text", "Status: Board reset");
  });
});

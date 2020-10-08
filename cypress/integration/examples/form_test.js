describe("testing for MVP",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/order-coffee");
    })
    it("passes the mvp",()=>{
        cy.get("[data-cy=specialInstructions]").type('dance monkey').should("have.value","dance monkey")
        cy.get("[data-cy=noFoam]").check().should('be.checked')
        cy.get("[data-cy=cinnamon]").check().should('be.checked')
        cy.get("[data-cy=caramel]").check().should('be.checked')
        cy.get("[data-cy=name]").type("ozzy").should("have.value","ozzy")
    })
})
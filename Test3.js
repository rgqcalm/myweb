/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {

//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2','option3']) //check multiple checkboxes(array of arguments)

//Static Dropdown(tag name will always be select)

cy.get('select').select('option2').should('have.value','option2') //select by value

//Dynamic dropdowns
cy.get('#autocomplete').type('ind')

cy.get('.ui-menu-item div').each(($e1, index, $list) => {

    if($e1.text()==="India")  //iterate through all elements and click on the one that matches the condition
    {
        cy.wrap($e1).click()
    }


})
//autocomplete
cy.get('#autocomplete').should('have.value','India') //assertion

//visible invisible
cy.get('#displayed-text').should('be.visible') //visible or not
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

//radio buttons

cy.get('[value="radio2"]').check().should('be.checked')






















}  )



}  )
describe('payment',()=>{
 
it('user can make payment',()=>{
// login
cy.visit('/')
cy.findByRole('textbox', {  name: /username/i}).type("johndoe")
cy.findByLabelText(/password/i).type("s3cret")
cy.findByRole('checkbox', {  name: /remember me/i}).check()
cy.findByRole('button', {  name: /sign in/i}).click()
// check account balance 
// click on pay button
//search for the user
// add amount and note  and click pay
// return to transactions
// go to personal payment
//click on payment
// vertify if the payment was made
// verify if the payment amount was deducted 
 
 })

});
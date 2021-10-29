import { render ,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TransactionCreateStepTwo from "./TransactionCreateStepTwo"


//        UNIT TEST         //
test('on initial render, the pay button is disabled ', async ()=>{
  render(<TransactionCreateStepTwo sender={{id:'5'}} receiver={{id:'5'}}/>)
  // screen.debug()
  expect(await screen.findByRole('button',{name:/pay/i})).toBeDisabled();
})


test('if an amount and note is entered, pay button becomes enabled ', async ()=>{
  render(<TransactionCreateStepTwo sender={{id:'5'}} receiver={{id:'5'}}/>)
 userEvent.type(screen.getByPlaceholderText(/amount/i),"50");
 userEvent.type(screen.getByPlaceholderText(/add a note/i),"dinner");
//  screen.getByRole('')
expect(await screen.findByRole('button',{name:/pay/i})).toBeEnabled();

})


//      INTEGRATION TEST COMBINNING THE TWO ABOVE TESTS                  //


test('on initial render, the pay button is disabled AND\nif an amount and note is entered, pay button becomes enabled ', async ()=>{
  render(<TransactionCreateStepTwo sender={{id:'5'}} receiver={{id:'5'}}/>)

  expect(await screen.findByRole('button',{name:/pay/i})).toBeDisabled();
 userEvent.type(screen.getByPlaceholderText(/amount/i),"50");
 userEvent.type(screen.getByPlaceholderText(/add a note/i),"dinner");

expect(await screen.findByRole('button',{name:/pay/i})).toBeEnabled();

})




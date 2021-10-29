import { render ,screen} from "@testing-library/react"
import TransactionCreateStepTwo from "./TransactionCreateStepTwo"

test('on initial render, the pay button is disabled ',()=>{

  render(<TransactionCreateStepTwo sender={{id:'5'}} receiver={{id:'5'}}/>)
  screen.debug()
})
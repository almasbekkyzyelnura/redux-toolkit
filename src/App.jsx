
import {useSelector, useDispatch} from "react-redux"
import { deposit, withdraw, randomDeposit } from "./redux/slices/moneySlice"

const App = () => {
  const {amount, ranSan} = useSelector(store => store.money)
  const dispatch = useDispatch()

  const handleDep = () => {
    dispatch(deposit(10))
  }
  const handleWith = () => {
    dispatch(withdraw(10))
  }
  const handlePanDep = () => {
    dispatch(randomDeposit())
  }
  
  
  return (
    <div>

      <h2>Redux Toolkit</h2>

      <h2>{amount}</h2>

      <button onClick={handleDep}>+10</button>
      <button onClick={handleWith}>-10</button>
      <button onClick={handlePanDep}>+  {ranSan}</button>
    </div>

  )
}

export default App
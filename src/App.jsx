import './App.css'
import RightSide from './Components/rightSide/rightSide'
import LeftSide from './Components/leftSide/leftSide'
import { HiArrowRight } from "react-icons/hi2";
function App({Icon}) {
  return (
    <main className="App">
      <RightSide Icon={HiArrowRight}/>
      <LeftSide />
    </main>
  )
}

export default App

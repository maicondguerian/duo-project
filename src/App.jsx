import './App.css'
import RightSide from './Components/rightSide/rightSide'
import LeftSide from './Components/leftSide/leftSide'
import { HiArrowRight } from "react-icons/hi2";
import NextPage from './Components/nextPage/NextPage';
function App({Icon}) {
  return (
    <main className="App">
      <LeftSide />
      <RightSide Icon={HiArrowRight}/>
      {/* <NextPage /> */}
    </main>
  )
}

export default App

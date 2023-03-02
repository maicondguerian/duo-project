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
      <div className='footer'>
      <code>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/maicondguerian" target="_blank">
          maicondlol
        </a> / <a href="https://github.com/JeremiasRincaveski" target="_blank">
          Jeremias
          </a>
      </code>
      </div>
    </main>
  )
}

export default App

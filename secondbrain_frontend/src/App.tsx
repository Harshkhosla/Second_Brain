import './App.css'
import Button from './component/ui/Button'
import { FiShare2 } from 'react-icons/fi'; 
import { FaPlus } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5"
import { Card } from './component/ui/Card';

function App() {
  function clicked() {
    console.log("sdkvjsdvnjvn");

  }
  return (
    <>
      <br />
      <br />
      <div className='flex justify-center  space-x-8'>

      <Button placeholder={"Share Brain"} Icon ={<FiShare2/>} onClick={clicked} variant={"primary"}  />
      <Button placeholder={"Add Content"} Icon ={<FaPlus/>} onClick={clicked} variant={"secondary"}  />


      </div>

      <Card Icon={<IoDocumentTextOutline/>} text ={"Projects Idea"}/>
    </>
  )
}

export default App

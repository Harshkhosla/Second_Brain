import './App.css'
import { Sidebar } from './component/Sidebar';
import { Home } from './component/Home';

function App() {


  return (
    <>
      <div className='flex  '>
        <Sidebar />
        <div className='flex-1'>
          <Home />
        </div>
      </div>
    </>
  )
}

export default App

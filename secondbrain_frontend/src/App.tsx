import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Sidebar } from './component/Sidebar';
import { Home } from './component/Home';
import { Share } from './component/Share';

function App() {


  return (
    <>
     <Router>

      <div className='flex  '>
        <Sidebar />
        <div className='flex-1'>
          {/* <Home /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/share" element={<Share />} />
          </Routes>
        </div>
      </div>
     </Router>
    </>
  )
}

export default App

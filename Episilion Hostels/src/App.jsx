import './App.css'
import { Routes, Route } from 'react-router' 
import { HomePage } from './HomePage/HomePage';

function App() {
  return (
    <>
    <Routes>
        {/* <Route index element={<PageHeader/>}></Route> */}
        <Route index element={<HomePage/>}></Route>
    </Routes>
    </>
  )
}

export default App

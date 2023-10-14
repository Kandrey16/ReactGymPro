import { React } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import EqiupmentPage from './pages/EquipmentPage';
import MuscleGroupPage from './pages/MuscleGroupPage';
import Table from './components/table/Table'

function App() {

  return (
    <>
      <Router>
        <Navbar>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/equipment' element={<EqiupmentPage/>} />
            <Route path='/muscle_group' element={<MuscleGroupPage/>} />
          </Routes>
        </Navbar>
      </Router> 
      <Table></Table>
    </>
  )
}

export default App

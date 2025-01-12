
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './componets/Footer';
import Header from './componets/Header';
import Staff from './pages/Staff'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import AuditoriumAdd from './pages/Auditorium';





function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/staff' element={<Staff/>}></Route>
      <Route path='/auditorium' element={<AuditoriumAdd/>}></Route>

     </Routes>
     <Footer/>
    </>
  )
}

export default App

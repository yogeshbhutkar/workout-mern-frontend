import Home from './pages/Home'
import Navbar from './components/Navbar'
import  { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

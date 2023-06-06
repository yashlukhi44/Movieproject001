import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Adddata from './Component/Adddata'
import Home from './Component/Home';
import MovieDetail from './Component/Moviedetail';
import BookDetail from './Component/BookDetail';
import BookTicket from './Component/BookTicket';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Adddata/>} />
        <Route path='/detail/:id' element={<MovieDetail/>}/>
        <Route path='/bookdetail/:id' element={<BookDetail/>}/>
        <Route path='/bookticket/:id' element={<BookTicket/>}/>
      </Routes>
    </div>
  );
}

export default App;

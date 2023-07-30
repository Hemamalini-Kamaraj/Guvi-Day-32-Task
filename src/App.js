// import './css/sb-admin-2.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Portal from './components/Portal';
import Library from './components/Library';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import ViewBook from './components/ViewBook';
import BooksCorner from './components/BooksCorner';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/portal" element={<Portal/>} >
            <Route path="library" element={<Library />} />
            <Route path="add-book" element={<AddBook />} />
            <Route path="library/edit/:id" element={<EditBook />} />
            <Route path="library/:id" element={<ViewBook />} />
            <Route path="bookscorner" element={<BooksCorner />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
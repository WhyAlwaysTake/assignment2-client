
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Edit from "./pages/Edit"
import AddEdit from "./pages/AddEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <ToastContainer position = "top-center"/>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/addContact" element={<AddEdit />} />
            <Route exact path="/update/:table/:info" element={<Edit />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

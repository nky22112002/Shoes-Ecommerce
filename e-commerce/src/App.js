import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
import { DefaultLayout } from "./components/Layout";
import HomePage from './pages/HomePage';

function App() {
  return(
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
  )
}

export default App;

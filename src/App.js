import { Routes, Route, Navigate } from "react-router-dom";
import Page from './Page';
import './App.scss';

const App = ()  => {
  return (
    <div>
      <Navigate from='/' to='/employees' />
      <Routes>
      <Route path='/employees' element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
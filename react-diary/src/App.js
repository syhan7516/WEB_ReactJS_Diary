import { Route,Routes } from 'react-router-dom';
import './App.css';
import OrderList from './OrderList.js';
import Create_React_App from './conception/Creacte_React_App';
import JSX from './conception/JSX';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<OrderList/>}></Route>
          <Route path="/creactReactApp" element={<Create_React_App/>}></Route>
          <Route path="/JSX" element={<JSX/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { productInputs, userInputs } from "./formSource";
import './style/dark.scss';
import { DarkModeContex } from './context/darkModeContex';
import { useContext } from "react";



function App() {
    const { darkMode } = useContext(DarkModeContex)

    return (
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path='users'>
                <Route index element={<List />}></Route>
                <Route path=':userId' element={<Single />}></Route>
                <Route path='new' element={<New inputs={userInputs} title='Add New User' />}></Route>
              </Route>
              <Route path='products'>
                <Route index element={<List />}></Route>
                <Route path=':productId' element={<Single />}></Route>
                <Route path='new' element={<New inputs={productInputs} title='Add New Product' />}></Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

export default App;

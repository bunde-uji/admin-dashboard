import Home from "./pages/home/home";
import Single from "./pages/single/single";
import Login from "./pages/login/login";
import New from "./pages/new/new";
import List from "./pages/list/list";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { userInputs, productInputs } from "./formSource";
import './style/dark.scss';
import {useState, createContext} from 'react';


export const AppThemeContext = createContext();

function App() {
  const [dark, setDark] = useState(false);

  return (
    <AppThemeContext.Provider value={{dark, setDark}}>
      <div className={dark ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              </Route>

              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AppThemeContext.Provider>
  );
}

export default App;

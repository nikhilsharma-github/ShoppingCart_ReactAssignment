import "./App.css";
import Header from "./Components/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./Components/Home";
import Cart from "./Components/Cart";
function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>

    // <BrowserRouter>
    // <Header />

    // {/* <div className="App"> */}
    // <Routes>
    //   <Route path="/" exact>
    //     <Home />
    //   </Route>
    //   <Route path="/cart">
    //     <Cart />
    //   </Route>
    // </Routes>
    // {/* </div> */}
  // </BrowserRouter>
  );
}

export default App;

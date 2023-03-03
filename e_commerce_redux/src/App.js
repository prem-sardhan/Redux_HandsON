
import "./App.css";
import Header from "./Simple_Ecommerce/Container/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import ProductListing from "./Simple_Ecommerce/Container/ProductListing";
import ProductDetails from "./Simple_Ecommerce/Container/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element ={ ProductListing } />
          <Route path="/product/:productId" element={ ProductDetails } />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

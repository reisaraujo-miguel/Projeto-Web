import "./App.css";
import NavBar from "./components/Navbar";
import AdminOptions from "./pages/AdminOptions";
import AdminPage from "./pages/AdminPage";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductOptions from "./pages/ProductOptions";
import ProductPage from "./pages/ProductPage";
import PurchaseCompleted from "./pages/PurchaseCompleted";
import Signup from "./pages/Signup";
import UserOptions from "./pages/UserOptions";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isAdmin =
    localStorage.getItem("isAdmin") === "true" ||
    sessionStorage.getItem("isAdmin") === "true";

  return (
    <>
      <header className="App-header" role="banner">
        <NavBar />
      </header>
      <main className="App">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<ProductPage />} />
              <Route path="/checkout" element={<Checkout />} />
              {isAdmin && <Route path="/admin" element={<AdminPage />} />}
              {isAdmin && (
                <Route path="/admin/admins" element={<AdminOptions />} />
              )}
              {isAdmin && (
                <Route path="/admin/users" element={<UserOptions />} />
              )}
              {isAdmin && (
                <Route path="/admin/products" element={<ProductOptions />} />
              )}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/finished" element={<PurchaseCompleted />} />
            </Routes>
          </div>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;

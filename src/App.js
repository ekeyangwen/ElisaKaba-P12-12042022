import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound";
import Header from "./Components/Header";
import Dashboard from "./pages/dashboard";
import VerticalNavbar from "./Components/VerticalNavbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user/:id" element={<Dashboard />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <VerticalNavbar />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;

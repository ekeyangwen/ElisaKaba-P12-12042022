import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound";
import Header from "./Components/Header";
import DashboardInfos from "./Components/DashboardInfos";
import { SrcProvider } from "./utils/context";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SrcProvider />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user/:id" element={<DashboardInfos />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

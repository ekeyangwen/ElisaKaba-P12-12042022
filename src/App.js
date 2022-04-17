import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./pages/About";
// import NotFound from "./pages/NotFound";
// import Logement from "./pages/Logement";
import Header from "./Components/Header";
// import Footer from "./components/Footer";


function App() {
  // const data= [
  //   {id: 18,
  //   userInfos:{
  //     firstName:"Cecilia",
  //     lastName:"Ratorez",
  //     age:34},
  //   score:0.3,
  //   }]

  return (
    <div className="App">
          <BrowserRouter>
     <Header />

<Routes>
  <Route exact path="/" element={<Home />} />
  {/* <Route exact path="/a-propos/" element={<About />} />
  <Route exact path="/logement/:id" element={<Logement />} />
  <Route exact path="*" element={<NotFound />} /> */}
</Routes>

{/* <Footer /> */}
</BrowserRouter>
      </div>
       
  );
  }
export default App;

//Styles
import { GlobalStyle } from "./GlobalStyles";
//Components and Pages
import Nav from "./components/Nav";
import Fit4LifePage from "./pages/Fit4lifePage";
import GalleryPage from "./pages/GalleryPage";
import Register from "./pages/Register";
import SignIn from "./components/SignIn";
import FormSubmitted from "./components/FormSubmitted";
//Router
import {Route,Routes,useLocation} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

function App() {
  const location=useLocation();
  return (
    <div className="App">
     <GlobalStyle/>
     <AnimatePresence mode='wait'>
     <Nav/>
     <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Fit4LifePage/>}></Route>
      <Route path='/fit4life-gallery' element={<GalleryPage/>}></Route>
      <Route path='/fit4life-register/' element={<Register/>}></Route>
      <Route path='/fit4life-register:id/' element={<SignIn/>}></Route>
      <Route path='/fit4life-register:id/form' element={<FormSubmitted/>}></Route>
     </Routes>
     </AnimatePresence>
    </div>
  );
}

export default App;

import Header from "./components/Header/Header.jsx";
import Card from "./components/Card/Card.jsx";
import Card2 from "./components/Card/Card2.jsx";
import AboutPage from './components/AboutPage.jsx'
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route} from "react-router-dom";



function App() {
  const [value, setValue] = useState(true);

  const changeState = (value) => {
    value ? setValue(false) : setValue(true);
  };

  return (

    <BrowserRouter>
    <Header changeState={changeState} />
      {/* {value ? <Card /> : <Card2 />} */}
      <Routes>
        <Route path="/" element = {value ? <Card /> : <Card2 />}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>


    
  );
}

export default App;

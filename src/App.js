import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Following from "./Pages/Following";
import Upload from "./Pages/Upload";
import {Defautlayout, HeaderOnly} from "./Components/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/'            element={<Defautlayout>  <Home/>      </Defautlayout>} />
          <Route path='/following'   element={<Defautlayout>  <Following/> </Defautlayout>} />
          <Route path='/upload'      element={<HeaderOnly>    <Upload/>    </HeaderOnly>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

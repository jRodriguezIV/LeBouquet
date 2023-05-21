import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Error from "./Pages/Error/Error";
import Index from "./Pages/Index/Index";
import Show from "./Pages/Show/Show";
import Edit from "./Pages/Edit/Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flowers" element={<Index />} />
          <Route path="/flowers/:id"  element={<Show />}/>
          <Route path="/flowers/:id/edit" element={<Edit />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

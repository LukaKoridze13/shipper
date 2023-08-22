
import Home from "./pages/Home/Home";
import {Routes, Route} from 'react-router-dom'
import LogIn from "./pages/LogIn/LogIn";

function App() {
  return (
    <div className="w-full max-w-[1536] mx-auto">
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<LogIn/>}></Route>
     </Routes>
    </div>
  );
}

export default App;

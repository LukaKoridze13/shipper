import { WorkingSteps } from "./components/WorkingSteps";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div  className="w-full max-w-[1536] mx-auto">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

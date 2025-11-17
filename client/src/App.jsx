import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About"
import Vendor from "./pages/vendors/Vendor";
import PreLoading from "./layouts/PreLoading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load time - remove or adjust as needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <PreLoading />}
      <Router>
        <Routes>
          <Route path="/" element={<Home isLoading={isLoading} />} />
          <Route path="/about" element={<About isLoading={isLoading} />} />
          <Route path="/vendors" element={<Vendor isLoading={isLoading} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

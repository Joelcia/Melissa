import { useEffect, useState } from "react";
import Introduction from "./components/Introduction";
import "./App.css";
import About from "./components/About";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <div className="flex h-screen overflow-hidden">
      {loading ? <Introduction /> : <About />}
    </div>
  );
}

export default App;

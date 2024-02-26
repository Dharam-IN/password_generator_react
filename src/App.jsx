import { BrowserRouter, Routes, Route } from "react-router-dom";
import PasswordGene from "./components/PasswordGene";
import { useEffect, useState } from "react";
// import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   window.onload = () => {
  //     setLoading(false);
  //   };

  //   // setTimeout(()=>{
  //   //   setLoading(false)
  //   // }, 2000)

  //   return () => {
  //     window.onload = null;
  //   };
  // }, []);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PasswordGene />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   {loading ? <LoadingSpinner /> : <PasswordGene />}
    // </div>
  );
}

export default App;

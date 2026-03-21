import { Suspense } from "react";
import "./App.css";
import DaisiNav from "./Components/DaisiNav/DaisiNav";
import NavBar from "./Components/NavBar/NavBar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import ResultsChart from "./Components/ResultsChart/ResultsChart";
import axios from "axios";
import MarkChart from "./Components/MarkChart/MarkChart";

const pricingPromise = fetch('PricingData.json')
.then(res => res.json())

const markPromise = axios.get('MarksData.json')

function App() {
  return (
    <>

    <header>
      <NavBar></NavBar>
      {/* <DaisiNav></DaisiNav> */}
    </header>

    <main>
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

      <Suspense fallback={
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>}>
        <MarkChart markPromise={markPromise}></MarkChart>
      </Suspense>

      <ResultsChart></ResultsChart>

    </main>

    </>
  );
}

export default App;

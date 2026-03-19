import { Suspense } from "react";
import "./App.css";
import DaisiNav from "./Components/DaisiNav/DaisiNav";
import NavBar from "./Components/NavBar/NavBar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";

const pricingPromise = fetch('PricingData.json')
.then(res => res.json())

function App() {
  return (
    <>

    <header>
      <NavBar></NavBar>
      {/* <DaisiNav></DaisiNav> */}
    </header>

    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
    </main>

    </>
  );
}

export default App;

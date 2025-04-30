import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import { Outlet } from "react-router";
import Spinner from "./components/Spinner";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Suspense fallback={<Spinner/>}>
          <Outlet/>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;

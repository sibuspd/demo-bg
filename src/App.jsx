import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import { Outlet } from "react-router";
import Spinner from "./components/Spinner";
import useProducts from "./utils/useProducts"; // Custom hook to fetch products data
import { product_api_url } from "./utils/constants"; // URL provided by BharatGo\
import ProductModal from "./components/ProductModal"; // Imported the Modal Box 

function App() {

  const { dataCarrierObject, error, loading} = useProducts(product_api_url);

  return (
    <div className="app">
      <Header />
      <main>
        <Suspense fallback={<Spinner/>}>
          <Outlet context={{ dataCarrierObject, error, loading} }/>
        </Suspense>

        <ProductModal/>
      </main>
      <Footer />
    </div>
  );
}

export default App;

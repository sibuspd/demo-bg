import React from "react";
import SearchProduct from "./SearchProduct";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function ProductList() {

  const { dataCarrierObject, error, loading } = useOutletContext();
  
  return (
    <div className="mx-auto mt-9 lg:mx-5">
      <div className="flex justify-center mb-8 mx-auto max-w-[100rem]">
        <SearchProduct />
      </div>
      <Outlet context={{ dataCarrierObject, error, loading}}/>
    </div>
  );
}

export default ProductList;

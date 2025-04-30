// CUSTOM HOOKS FOR FETCHING PRODUCTS DATA
// This is not a JSX file because it returns a value and doesn't render anything
import { useEffect, useState } from "react";

export default function useProducts(url) {

    const [ dataCarrierObject, setDataCarrierObject] = useState([]); // Sets the data payload to an empty array 
    const [ error, setError] = useState(null); // In case if error occurs
    const [ loading, setLoading] = useState(true); // Loading becomes false when data is fetched 

    useEffect(() => { // The actual fetching is being done here

        //fetching funtion defined
        const fetchProducts = async() => {
            try{
                const response = await fetch(url); // URL fed
                const result_json = await response.json();
                setDataCarrierObject(result_json);
            }
            catch(error){
                setError(error);
            }
            finally{
                setLoading(false); // After either Data or error
            }
        }

        //fetching funtion called
        fetchProducts();

    }, [url]); // Doesn't get re-invoked unless the API URL changes from cross-origin

    return { dataCarrierObject, error, loading };
}; 

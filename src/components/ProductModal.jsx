import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../utils/modalSlice";
import { Button } from "daisyui";


// THE MODAL BOX THAT TAKES STATUS INFORMATION FROM MODAL SLICE
export default function ProductModal(){
    const dispatch = useDispatch();
    const { isOpen, product } = useSelector( (state) => state.modal) // Name of the slice is modal in modalSlice.js

    if(!isOpen) return null; // This means Modal is still not open

    // But if isOpen is true i.e., if a product card has been clicked
    return (
        <div>
            Modal Box
            <Button circle onClick={dispatch(closeModal())}> <Icon name="feather:x" /> </Button>
        </div>
    )
}
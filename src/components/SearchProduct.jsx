import React from 'react'
import { useDispatch } from 'react-redux';
import { setSearchWord} from '../utils/cartSlice'

function SearchProduct() {

  const dispatch = useDispatch();

  function handleSearchChange(e){
    dispatch(setSearchWord(e.target.value));
  }

  return (
    <div>
      <input type="text" placeholder='Search the product here..' 
      onChange={handleSearchChange}/>
    </div>
  )
}

export default SearchProduct
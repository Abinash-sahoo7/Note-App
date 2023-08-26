import React from 'react'
import {BsSearch} from 'react-icons/bs'

function Search({searchText, handleSearchText}) {
  return (
    <div className='search'>
        <BsSearch />
        <input value= {searchText} onChange={(e) => handleSearchText(e.target.value)} type="text" placeholder='search Notes'/>
    </div>
  )
}

export default Search
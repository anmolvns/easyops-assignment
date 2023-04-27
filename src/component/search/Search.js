import { useState } from 'react'
import './search.scss'

function Search({users, setSearch}) {
    const [search, setsearch] = useState("")
    
    const handleSearch = (e) => {
        setsearch(e.target.value)

        const filteredData = users.filter((user) =>
            user.firstName.toLowerCase().includes(search.toLowerCase()) || user.lastName.toLowerCase().includes(search.toLowerCase())
        );
        
        if(e.target.value){ 
            setSearch(filteredData);
        }else{
            setSearch([]);
        }
    }
    
  return (
    <div className='search'>
        <div className="search__searchbox">
            <img src="search.svg" alt="search" className='search__searchbox__img' />
            <input type="text" value={search} onChange={(e)=> handleSearch(e)} className='search__searchbox__input'/>
        </div>
    </div>
  )
}

export default Search
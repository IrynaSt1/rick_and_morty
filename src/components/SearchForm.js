import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import { MdSearch } from "react-icons/md";
import  "./SearchForm.css"
const SearchForm=()=>{
    const {setSearchTerm}=useGlobalContext();
    const searchValue=useRef('')

    useEffect(()=>{
        searchValue.current.focus()
    },[])

    const searchCharacter=()=>{
        setSearchTerm(searchValue.current.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
    }

    return(
        <div className="search">
          <form onSubmit={handleSubmit} className='form-field '>
            <MdSearch className="icon"/>
            <input type='text'
            id='name'
            placeholder="Filter by name..."
            ref={searchValue}
            onChange={searchCharacter}/>
          </form>
        </div>
    )
}

export default SearchForm;
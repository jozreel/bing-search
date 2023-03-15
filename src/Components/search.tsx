import { useState } from "react";

type SearchProps = {
    onSubmit: Function
}
const Search = ({onSubmit =(v:String) =>null}:SearchProps) => {
    const [query, setQuery] =  useState<string>('');
    return (
        <div className="search-form">
            <form>
                <input onChange={e =>setQuery(e.target.value)} type="search" value={query}></input>
                <button onClick={e=>{e.preventDefault(); onSubmit(query)}}>Search</button>
            </form>
        </div>
    );
}
export default Search;
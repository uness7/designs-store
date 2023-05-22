

const SearchBar = () => {
    return (
        <label htmlFor="searchId">
            <input className="p-2 w-96 ml-4 border-2 border-slate-300 rounded-md text-start text-lg font-light" id="searchId" type="text" placeholder="search for items" name="search" />
        </label>

    );
}

export default SearchBar;
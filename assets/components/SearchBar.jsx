

const SearchBar = () => {
    return (
        <label htmlFor="search">
            <input className="p-2 w-96 border-2 border-gray-900 rounded-md text-start text-lg font-light" type="text" placeholder="search for items" name="search" />
        </label>

    );
}

export default SearchBar;
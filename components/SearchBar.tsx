'use client'
import {SearchManufacture} from "@components/index";
import {useState} from "react";

const SearchBar = () => {
    const [manuFacture, setManuFacture] = useState('');

    const handleSearch = () => {}
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacture
                    manufacturer={manuFacture}
                    setManufacturer={setManuFacture}
                />
            </div>
        </form>
    );
};

export default SearchBar;

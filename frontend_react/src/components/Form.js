import React, {useState} from 'react';
import './Navbar/Navbar.css';

const Form = () => {

    const [cityName, setCity] = useState('Sugar Land');
    const [city, setCityEntered] = useState();

    const changeHandler = (e) => {
        console.log(e.target.value);
        setCityEntered(e.target.value);
    }

    const searchHandler = async(e) => {
        e.preventDefault();
        console.log(`Searching for ${city}...`);

        setCity(city);
        setCityEntered('');
    }

    return (
        <form className="Search">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input onChange={changeHandler} value={city} className="SearchBar" type="text" placeholder="Please enter a city name." />
            <button onClick={searchHandler} className="SearchButton" type="submit">Search</button>
        </form>
    )
}

export default Form;

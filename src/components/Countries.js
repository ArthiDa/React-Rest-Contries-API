import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    return (
        <div className='container mx-auto px-4'>
            <h1 className='text-center text-[blue] text-3xl font-bold my-10'>{countries.length} Countries in A Single Page</h1>
            <div className='grid grid-cols-3 gap-8 justify-items-center'>
            {
                countries.map(country => <Country country = {country} key = {country.cca3}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;
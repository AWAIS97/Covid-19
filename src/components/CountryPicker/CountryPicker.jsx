import React from 'react';
import {useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {
const [fetchedCountries , setFetchedCountries]=useState([]);

   useEffect (() =>{
       const fetchCountriesApi = async () =>{
           setFetchedCountries (await fetchCountries());

       }
       fetchCountriesApi();
   },[setFetchedCountries]);
//    console.log(fetchedCountries);

    return(
      
      <FormControl className={styles.formControl}>  
          <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>  
            <option value=''>Global</option>
              {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
          </NativeSelect>
      </FormControl>
    )

}
export default CountryPicker;
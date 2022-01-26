import React from 'react';
import Country from './Country';

const Countries = ({ countries, handleClick }) => {

  return (
    <div>
        {countries.length === 1 ? 
            <Country country={countries[0]} />
            :(<table>
                <tbody>
                    {countries.map((country) => 
                        <tr key={country.name.common}>
                            <td>{country.name.common}</td>
                            <td><button onClick={() => handleClick(country.name.common)}>show</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            )}
    </div>
  )
};

export default Countries;

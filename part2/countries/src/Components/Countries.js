import React from 'react';
import Country from './Country';

const Countries = ({ countries }) => {

  return (
    <div>
        {countries.length === 1 ? 
            <Country countries={countries} />
            :(<table>
                <tbody>
                    {countries.map((country) => 
                        <tr key={country.name.common}>
                            <td>{country.name.common}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            )}
    </div>
  )
};

export default Countries;

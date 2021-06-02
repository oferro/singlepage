import React from 'react';

const Warier = ({name, birth_year, gender}) => {
    return (
                <tr>
                    <td class="pv3 pr3 bb b--black-20">{name}</td>
                    <td class="pv3 pr3 bb b--black-20">{birth_year}</td>
                    <td class="pv3 pr3 bb b--black-20">{gender}</td>
                </tr>
    );
}

export default Warier;
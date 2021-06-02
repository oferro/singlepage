import React from 'react';
import Warier from './Warier';

const WariersList = ({wariers}) => {
    return (
        <div>
            {
                wariers.map((warier, i) => {
                    return (
                        <Warier
                            key = {i}
                            name = {warier.name}
                            birth_year = {warier.birth_year}
                            gender = {warier.gender}
                            />
                    );
                })
            }
        </div>
    )
}

export default WariersList;
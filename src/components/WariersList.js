import React from 'react';
import Warier from './Warier';


const WariersList = ({wariers}) => {
    return (
        <div>
            <div class="pa4">
                <div class="overflow-auto">
                    <table class="f6 w-100 mw8 center" cellspacing="0">
                        <thead>
                            <tr>
                                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
                                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Birth Date</th>
                                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Gender</th>
                            </tr>
                        </thead>
                            <tbody class="lh-copy">
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
                            </tbody> 
                    </table>
                </div>
            </div>
        </div>
    )
}

export default WariersList;
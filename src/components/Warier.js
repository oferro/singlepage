import React from 'react';

const Warier = ({name, birth_year, gender}) => {
    return (
        <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                {name}, 
            </div>
            <div>    
                {birth_year}, 
            </div>
            <div>    
                {gender}
            </div>
        </div> 
    );
}

export default Warier;
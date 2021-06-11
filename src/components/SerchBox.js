import React from 'react';

const SerchBox = ({serchChange}) => {
    return (
        <div className='pa'>
            <input 
                className = 'pa3 ba b--green bg-lightest-blue'
                type = 'serch'
                placeholder = 'serch for warier ...'
                onChange = {serchChange}
                />
        </div>
    );
}

export default SerchBox;
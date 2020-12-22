import React from 'react'

const FullName = ({name}) => {
    return (
        <div>
            <button onClick = {()=>alert(name)}>show name</button>
        </div>
    )
}

export default FullName

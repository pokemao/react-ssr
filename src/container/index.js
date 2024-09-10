import React, { useState } from 'react'

function Index(props) {
    const [count, setCount] = useState(0)

    console.log(window);
    
    return <>
        <h1>{props.title}</h1>
        <div onClick={() => setCount(count + 1)}>{count}</div>
    </>
}

export default Index

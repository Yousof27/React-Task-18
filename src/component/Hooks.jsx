import React, { useRef, useState, useEffect } from 'react'

function Hooks() {
    const [count, setCout] = useState(0);
    const interval = useRef()

    useEffect(() => {
        interval.current = setInterval(() => {
            setCout(count + 1);
        }, 1000);

        return () => {
            clearInterval(interval.current);
        }
    }, [count]);


    return (
        <>
            <div>Time: {count}</div>
            <button onClick={() => clearInterval(interval.current)}>Clear Counter</button>
        </>
    )
}

export default Hooks
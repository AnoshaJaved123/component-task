import { useState, useEffect } from 'react';
import { useCallback } from 'react';

const Multiplier = () => {
    const [multiple, setMultiple] = useState(-5)

    useEffect(() => {
        window.addEventListener("updateCount", updateCountEventHandler, false);

        return () => {
            window.removeEventListener("updateCount", updateCountEventHandler);
        };
    }, []);
    const updateCountEventHandler = useCallback((e) => {
        console.log(e.detail.value)
        const count = localStorage.getItem('count');
        let newValue = (e.detail.value)*multiple
        setMultiple(newValue)
    });

   
    return (
        <>
            <div>Multiple: {multiple}</div>
        </>
    );
};

export default Multiplier;
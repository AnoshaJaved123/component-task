import { useState, useEffect } from 'react';
import { useCallback } from 'react';

const Subtraction = () => {
    const [subtract, setSubtract] = useState(4)
    useEffect(() => {
     window.addEventListener('updateCount',updateCountEventHandler,false);
     return ()=>{
        window.addEventListener('updateCount',updateCountEventHandler);
     }
    }, [])
    
    const updateCountEventHandler = useCallback((e)=>{
        let newSub = subtract-(e.detail.value);
        setSubtract(newSub)
    })

  return (
    <div>Subtraction:{subtract}</div>
  )
}

export default Subtraction
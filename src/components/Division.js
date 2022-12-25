import { useState, useEffect } from 'react';
import { useCallback } from 'react';

const Division = () => {
    const [div, setDiv] = useState(6)
    useEffect(() => {
      window.addEventListener('updateCount',updateCountEventHandler,false)
    
      return () => {
        window.addEventListener('updateCount',updateCountEventHandler)
      }
    }, [])

    const updateCountEventHandler = useCallback((e)=>{
        let newDiv = div/(e.detail.value)
        setDiv(newDiv)
    })
    
  return (
    <div>Division:{div}</div>
  )
}

export default Division
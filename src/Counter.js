import { useState, useEffect } from 'react'


const Counter = () => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    localStorage.setItem('count', counter)
  }, [])

  const funcIncr = () => {
    setCounter(counter => counter + 1);
       window.dispatchEvent(
      new CustomEvent('updateCount', {
        detail: {
          value: counter+1,
         
        },
      }
    ))
  }
  const funcDecr = () => {
    setCounter(counter => counter - 1);
    window.dispatchEvent(
      new CustomEvent('updateCount', {
        detail: {
          value: counter-1,
         
        },
      }
    ))
  }

   return (
    <div className='counter'>
      <button onClick={funcIncr}>+</button>
      <div id='count'>{counter}</div>
      <button onClick={funcDecr}>-</button>
    </div>
  )
}

export default Counter
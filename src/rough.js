import {useState} from 'react';

const Multiplier = () => {
//   let value = localStorage.getItem('count');
const [multiple, setMultiple] = useState(-7)

  const count = localStorage.getItem('count');
  return (
    <>
      <div>Multiple: {multiple * count}</div>
    </>
  );
};

export default Multiplier;
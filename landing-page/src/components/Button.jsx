import React, {useState} from 'react'

export const Button = () => {
  const [count, setCount] = useState(0);
  const handleCount = () =>{
    setCount(count + 1)
  }

  return (
    <button onClick={handleCount}>You clicked {count} times</button>
  )
}

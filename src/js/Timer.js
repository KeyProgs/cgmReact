import React, { useState } from "react"
import { render } from "react-dom"

const Timer = () => {
  var [count,setCount] = useState(0)

  const handleOnClick = () =>  setCount(count++)
    
  

  return (
    <div>
      <p>{count} times clicked</p>o2switch parrainage
      <button onClick={handleOnClick}>Click me</button>
    </div>
  )
}

render(<Timer />, document.getElementById("root"))

export default Timer;
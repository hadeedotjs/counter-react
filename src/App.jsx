import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count +1);
  }

  return (

    <div>
     <button onClick={increment}>Counter: {count}</button>
    </div>

  )


}

export default App

























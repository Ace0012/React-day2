import React from 'react'

const Counter = () => {
const [count, setCount]=React.useState(0)


  return (
    <div>
        
        <h1>Counter App</h1>
        <h2 >{count}</h2>
        <button onClick={()=>{setCount(count+1)
        if(count%2===0){
            document.querySelector('h2').style.color = 'red'
        }
        else{
            document.querySelector('h2').style.color = 'green'
        }
        }}>Increment</button>
        <button onClick={()=>{setCount(count-1)
           if(count%2===0){
            document.querySelector('h2').style.color = 'red'
        }
        else{
            document.querySelector('h2').style.color = 'green'
        }
        }}>Decrement</button>
        <button onClick={()=>{setCount(count*2)
           if(count%2===0){
            document.querySelector('h2').style.color = 'green'
        }
        else{
            document.querySelector('h2').style.color = 'red'
        }
        
        }}>Double</button>
        
        
        
        </div>
  )
}

export default Counter
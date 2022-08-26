import React from "react";
import { useState } from "react"
//
const Appp =() => {

const [name,setName]= useState()
const[fullName,setFullName] = useState();
    const inputEvent=(event) => {//event works as a object
        console.log(event.target.value);
        // we can see what users typed in the console by using target .value.
        setName(event.target.value)
       
    };

    const onSubmit =()=>
    {
        setFullName(name);
    }
    return (
        <>
        <div>

            <h1>Hello {fullName}</h1>
            <input type='text' placeholder="Enter your Name" defaultValue="" onChange={inputEvent}
            value={name}//event trigger done by these.
            />
            <button onClick={onSubmit}> 'click me 🙂'</button>  
        </div>
        
        </>
    )
}

export default Appp;
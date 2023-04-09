import React from 'react'

//function Greet () 
//{
//    return <h1>Hello BRO!</h1>
//}

// Better way to do this we can import this as MyComponent
const Greet = () => <h1>Hello BRO</h1>

export default Greet

// This way we must import this with a name 

 //export const Greet = () => <h1>Hello BRO</h1>

// Functional component 
// Use this when you want a function (as much as posible) no 'this' keyword and no need to know the state of the component

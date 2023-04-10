import React from "react";

const Hello = () => {
    //app with JSX
//    return (
//        <div className='dummyClass'>
//            <h1>Hello Drago</h1>
//        </div>
//    );
    //app without JSX
    // first parametar is a tag that you want to use, second parametar is , and a third parametar is the content of the tag
    // if you want tag in tag you need to use create element function instead of third tag
    // word class is used so you need to use className atribute instead of class
    return React.createElement('div', null, React.createElement('h1', {id: 'hello', className: 'dummyClass'}, 'Hello Drago'));
};

export default Hello;


// Class -> className
// for -> htmlFor
// onclick -> onClick
// tabindex -> tabIndex
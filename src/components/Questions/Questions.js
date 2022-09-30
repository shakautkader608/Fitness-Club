import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions'>
           <h1>How does React work?</h1>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
         </p>
         <h1>Difference between props and state?</h1>
         <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>

         <h1>What is use effect used for except LoadData?</h1>
         <p>Running once on mount: fetch API data
            Running on state change: validating input field
            Running on state change: live filtering
            Running on state change: trigger animation on new array value
            Running on props change: update paragraph list on fetched API data update
            Running on props change: updating fetched API data to get BTC updated price</p>
        </div>
        
    );
};

export default Questions;
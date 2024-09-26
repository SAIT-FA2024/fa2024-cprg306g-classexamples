"use client"

import { useState } from "react";

export default function Counter(){

    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        let currentCount = counter;
        if( counter < 10){
            setCounter(currentCount + 1);
        }
        // counter = counter + 1; // don't do this
    }

    const resetCounter = () => setCounter(0);

    // setCounter( 1 ); // invoking a setter
    // in the code call will cause an infinite loop

    let buttonStyles = "bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 text-white rounded py-2 px-4 mt-5";
    let resetStyles = "bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 text-white rounded py-2 px-4 mt-5";
    if( counter >= 10 ){
        buttonStyles = "bg-gray-500 text-white rounded py-2 px-4 mt-5";
    }

    return(
        <div className="bg-slate-300 p-5">
            <h2 className="text-2xl">Basic Increment Counter</h2>
            <p className="text-lg">Count: {counter}</p>
            <button onClick={incrementCounter} className={buttonStyles} >Increment!</button>
            <button onClick={resetCounter} className={resetStyles} >Reset Counter</button>
        </div>
    );
}
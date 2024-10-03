"use client"

import { useState } from "react";
import CounterWithProps from "./counter-props";
import CounterDisplay from "./counter-display";

export default function CounterPropPage(){
    
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        let currentCount = counter;
        if( counter < 10){
            setCounter(currentCount + 1);
        }
        // counter = counter + 1; // don't do this
    }

    const resetCounter = () => setCounter(0);

    return(
        <main>
            <CounterWithProps
                currentCount={counter}
                incrementCounterFunction={incrementCounter}
                resetCounterFunction={resetCounter}
            />
            <article>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at nisl sit amet lorem bibendum facilisis vitae vitae neque.</p>
            </article>
            <CounterDisplay currentCount={counter} />
        </main>
    );
}
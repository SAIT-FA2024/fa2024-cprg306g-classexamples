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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at nisl sit amet lorem bibendum facilisis vitae vitae neque. Sed lobortis ligula non egestas sollicitudin. Donec mauris nibh, tincidunt eget ex vel, eleifend iaculis dolor. Curabitur dolor quam, posuere ultricies ligula vel, fringilla pharetra felis. Morbi eu nisi metus. Aenean a interdum augue. Nullam vel enim sed odio vestibulum fermentum ac a magna. Donec purus quam, vestibulum sed orci eu, porttitor ornare ante. Pellentesque ultrices, nunc quis volutpat ornare, libero augue scelerisque dui, id pretium lorem dolor aliquet quam. Sed eu sollicitudin nisl, eget maximus dolor. Nullam mi risus, euismod a ultricies non, euismod ac tortor. Nulla eu consequat elit, a tempus nunc. </p>
            </article>
            <CounterDisplay currentCount={counter} />
        </main>
    );
}
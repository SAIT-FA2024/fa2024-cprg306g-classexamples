"use client"

import { useState } from "react";
import RegistrationForm from "./managed-form";

export default function RegistrationPage(){

    const [formOpen, setFormOpen] = useState(false);

    const toggleForm = () => {
        if( formOpen ){
            setFormOpen(false);
        } else {
            setFormOpen(true);
        }
    }

    const toggleForm2 = () => formOpen ? setFormOpen(false) : setFormOpen(true);

    return(
        <main className="p-5">
            <h1 className="text-3xl text-center mb-4 font-serif font-black">Registration</h1>
            <div>
                <button onClick={toggleForm2}>Toggle Registration Form</button>
            </div>
            {/* { false ? <p>Hello</p> : <p>Something Else</p> } */}
            { formOpen && <RegistrationForm /> }
            
        </main>
    );
}
"use client"

import { useState } from "react";

export default function RegistrationForm() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [subscription, setSubscription] = useState("");
    const [message, setMessage] = useState("");

    const handleFullNameChange = (event) => {
        // console.dir(event.target.value);
        setFullName(event.target.value);
    }
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handleBirthDateChange = (event) => setBirthDate(event.target.value);
    const handleSubscriptionChange = (event) => setSubscription(event.target.value);
    const handleMessageChange = (event) => setMessage(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.dir(event);

        let registrationObject = {
            fName: fullName,
            mail: email,
            bDay: birthDate,
            plan: subscription,
            msg: message
        }

        alert(`
            Name: ${registrationObject.fName} | 
            Email: ${registrationObject.mail} | 
            Birthday: ${registrationObject.bDay} | 
            Plan Type: ${registrationObject.plan} | 
            Message: ${registrationObject.msg}
            `);

        setFullName("");
        setEmail("");
        setBirthDate("");
        setMessage("");
    }


    return(
        <form onSubmit={handleSubmit} className="p-4 bg-blue-100">
            <div className="mb-3">
                <label className="inline-block w-40">Full Name:</label>
                <input
                    onChange={handleFullNameChange}
                    value={fullName}
                    type="text"
                    placeholder="John Smith"
                    className="px-2 py-1 rounded border border-blue-500 focus:bg-orange-100"
                />
                {/* <p>{fullName}</p> */}
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Email:</label>
                <input onChange={handleEmailChange} value={email} type="email" placeholder="example@mail.ca" className="px-2 py-1 rounded border border-blue-500 focus:bg-orange-100"/>
                {/* <p>{email}</p> */}
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Birthdate:</label>
                <input onChange={handleBirthDateChange} value={birthDate} type="date" className="px-2 py-1 rounded border border-blue-500 focus:bg-orange-100" />
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Subscription Type: </label>
                <select onChange={handleSubscriptionChange} className="px-2 py-1 bg-white rounded border border-blue-500 focus:bg-orange-100">
                    <option selected disabled value="">--- Please select a Plan ---</option>
                    <option value="free">Free Plan</option>
                    <option value="basic">Basic Plan</option>
                    <option value="premium">Premium Plan</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="inline-block w-40 align-top">Message:</label>
                <textarea onChange={handleMessageChange} value={message} className="px-2 py-1 rounded border border-blue-500 focus:bg-orange-100"></textarea>
            </div>

            <div>
                <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded px-3 py-2">Submit Registration</button>
            </div>
        </form>
    );
}
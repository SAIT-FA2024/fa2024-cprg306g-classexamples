"use client"
import { useEffect, useState } from "react";

export default function DogPage(){

    const [dogList, setDogList] = useState([]);
    const [dogName, setDogName] = useState("");
    const [dogAge, setDogAge] = useState(0);
    const handleName = (event) => setDogName(event.target.value);
    const handleAge = (event) => setDogAge(event.target.value);
    const handleSubmit = async (event) =>{
        event.preventDefault();
        let newDogObj = {
            name: dogName,
            age: dogAge
        }
        let request = new Request("http://localhost:3000/week-13/api/dogs", {
            method: "POST",
            body: JSON.stringify(newDogObj)
        } );
        try {
            const response = await fetch(request);
            if(response.ok)console.log("Success!");
        } catch (error) {
            console.log(error);
        }

        getDogList();
    }

    async function getDogList(){
        try {
            const response = await fetch("http://localhost:3000/week-13/api/dogs");
            if(!response.ok) console.log(response.error);
            const data = await response.json();
            setDogList(data);         
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteDog(idNum){
        let request = new Request(`http://localhost:3000/week-13/api/dogs/${idNum}`, {
            method: "DELETE"
        } );
    }

    useEffect( () => {
        getDogList();
    }, []);

    return(
        <main className="m-4">
            <header>
                <h1>Dogs Control Panel</h1>
            </header>
            <section>
                {
                    dogList.map( (dog) => (
                        <div className="border-b-2">
                            <p>ID: {dog.id}</p>
                            <p>Name: {dog.name}</p>
                            <p>Age: {dog.age}</p>
                        </div>
                    ) )
                }
            </section>
            <form onSubmit={handleSubmit} className="bg-orange-400 p-4">
                <h2>Add new dog</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={handleName} value={dogName} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" onChange={handleAge} value={dogAge} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>
    );
}
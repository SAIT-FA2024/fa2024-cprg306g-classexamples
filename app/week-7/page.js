"use client"

import { useState } from "react";
import dogData from "./dogs.json";
import DogList from "./dog-list";
import DogForm from "./dog-form";

export default function AdoptionPage() {

    let dogArray = dogData.map((dog) => ({ ...dog }));
    const [dogList, setDogList] = useState(dogArray);

    const [formOpen, setFormOpen] = useState(false);

    const addNewDog = (dogObj) => {
        setDogList([...dogList, dogObj]);
    }

    const removeDog = (event) => {
        let thisDogList = dogList.filter(
            (dog) => dog.id != event.target.id
        );
        setDogList(thisDogList);
    }

    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);

    return (
        <main>
            {formOpen && <DogForm addNewDogFunc={addNewDog} closeFormFunc={closeForm} />}
            <div className="absolute right-5 top-5 overflow-hidden rounded-full w-8 h-8 z-0">
                <button 
                    className="bg-blue-700 text-white text-3xl w-full h-full leading-none"
                    type="button"
                    onClick={openForm}
                >+</button>
            </div>
            <DogList dogArray={dogList} removeDogFunc={removeDog} />
        </main>
    );
}
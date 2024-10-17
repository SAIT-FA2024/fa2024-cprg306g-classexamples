"use client"

import { useState } from "react";

export default function DogForm({addNewDogFunc, closeFormFunc}) {

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [breed, setBreed] = useState();
    const [photoUrl, setPhotoUrl] = useState();

    const handleIdChange = (event) => setId(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        let newDogObj = {
            id: id,
            name: name,
            breed: breed,
            photoUrl: photoUrl,
        }

        addNewDogFunc(newDogObj);

        setId("");
        setName("");
        setBreed("");
        setPhotoUrl("");

        closeFormFunc();
    }

    return (
        <div onClick={closeFormFunc} className="absolute w-full h-full bg-gray-700/60 flex items-center justify-center z-10">
            <form onClick={ (event) => event.stopPropagation() } onSubmit={handleSubmit} className="bg-green-400 rounded-lg p-5 text-black max-w-md">
                <h2 className="text-2xl mb-2">Add a new dog for adoption</h2>
                <div className="mb-2">
                    <label className="inline-block w-40">ID:</label>
                    <input type="number" onChange={handleIdChange} value={id} />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Dog Name:</label>
                    <input type="text" onChange={ (event) => setName(event.target.value) } value={name} />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Breed:</label>
                    <input type="text" onChange={ (event) => setBreed(event.target.value) } value={breed} />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Photo URL:</label>
                    <input type="text" onChange={ (event) => setPhotoUrl(event.target.value) } value={photoUrl} />
                </div>
                <div>
                    <button type="submit" className="rounded bg-green-700 text-white p-2">Add New Dog</button>
                    <button
                        type="button"
                        onClick={closeFormFunc}
                        className="rounded bg-green-700 text-white p-2 ml-2"
                    >Close Form</button>

                </div>
            </form>
        </div>
    );
}
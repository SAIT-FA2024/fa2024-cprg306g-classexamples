import DogCard from "./dog-card";

export default function DogList({ dogArray, removeDogFunc }) {

    return (
        <section className="p-5">
            <h1 className="text-4xl mb-3 text-center">Dogs for Adoption</h1>
            <div className="grid grid-cols-2 gap-5 ">
                {
                    dogArray.map((dog) => (<DogCard dogObj={dog} removeDogFunc={removeDogFunc} key={dog.id} />))
                }
            </div>

        </section>
    );
}
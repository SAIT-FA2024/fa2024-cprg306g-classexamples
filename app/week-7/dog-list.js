import DogCard from "./dog-card";

export default function DogList({dogArray, removeDogFunc}){

    return(
        <section className="grid grid-cols-2 gap-5">
            {
                dogArray.map( (dog) => ( <DogCard dogObj={dog} removeDogFunc={removeDogFunc} key={dog.id} /> ) )
            }
        </section>
    );
}
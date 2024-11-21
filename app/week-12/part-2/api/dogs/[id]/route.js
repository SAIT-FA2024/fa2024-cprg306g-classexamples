export async function GET(request, {params} ) {
    const { id } = await params;
    const idNum = Number(id);

    // SELECT * FROM dogs
    const dogs = [
        { id: 1, name: "Luna", age: 2 },
        { id: 2, name: "Max", age: 4 },
        { id: 3, name: "Rover", age: 3 },
    ];
    const thisDog = dogs.find( (dog) => dog.id === idNum );
    if( !thisDog ){
        return new Response("This dog does not exist.", {status: 404});
    }
    return new Response( JSON.stringify(thisDog), {status:200} );

}

export async function PUT(request, {params}) {
    const { id } = await params;
    const idNum = Number(id);
    const dog = await request.json();
    // send new data to database for dog number [idNum]
    // UPDATE dogs SET name = ${dog.name}, age = ${dog.age} WHERE id = ${idNum}
    return new Response(null, {status: 204});
}

export async function PATCH(request, {params}) {
    const { id } = await params;
    const idNum = Number(id);
    const dog = await request.json();

    if(dog.name){
        // update dog name in the database for dog number [idNum]
    }

    if(dog.age){
        // update dog age in the database for dog number [idNum]
    }

    return new Response(null, {status: 204} );
}

export async function DELETE(request, {params} ){
    const { id } = await params;
    const idNum = Number(id);
    // remove dog from database
    // DELETE FROM dogs WHERE id = ${idNum}
    let responseText = `Dog id number ${idNum} was deleted.`;
    return new Response( responseText, {status: 200} );
}
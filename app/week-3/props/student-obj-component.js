

export default function StudentObjComp({studentObj}){

    let {
        studentName: name,
        studentAge: age,
        address: {city, province}
    } = studentObj;

    return(
        <div className="inline-block border border-red-500 bg-amber-600 mx-10 my-5 p-5">
            {/* <h3>{studentObj.studentName}</h3>
            <p>Age: {studentObj.studentAge}</p>
            <p>{studentObj.address.city} {studentObj.address.province}</p> */}
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>{city} <b>{province}</b></p>
        </div>
    );
}
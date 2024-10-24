export default function Artwork({artObj}){

    const {
        title,
        primaryImageSmall,
        artistDisplayName,
        objectDate,
        department
    } = artObj;

    return(
        <div className="m-10 p-5 bg-blue-400 rounded-lg">
            <h3 className="text-2xl">{title}</h3>
            <img src={primaryImageSmall} className="max-h-52 border-2 border-cyan-900" />
            <ul>
                <li>Artist: {artistDisplayName}</li>
                <li>Date: {objectDate}</li>
                <li>Department: {department}</li>
            </ul>
        </div>
    );
}
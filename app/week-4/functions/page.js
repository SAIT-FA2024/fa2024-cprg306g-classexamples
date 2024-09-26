

export default function FunctionsPage(){

    // let myArray = [true,2,"Three",4,5];

    function helloWorld(username, dayOfWeek) {
        // return "Hello World! Welcome back " + username + ", today is " +dayOfWeek;
        return `Hello World! Welcome back ${username}, today is ${dayOfWeek}`;
    }

    const helloWorld2 = (username, dayOfWeek) => {
        return `Hello World! Welcome back ${username}, today is ${dayOfWeek}`;
    }

    const helloWorld3 = (username) => `Hello ${username}`;
    const helloMath = (a,b) => a + b;

    const louder = (textFunc, username) => {
        // validation
        // check to make sure textFunc is a function
        // check to make sure the function is consistent with my logic
        let thisText = textFunc(username);
        return `${thisText.toUpperCase()}!!!!!`;
    }

    const multiplyBy = (num1) => {
        return (num2) => num1 * num2;
    }

    const multiplyByThree = multiplyBy(3);
    const multiplyByTen = multiplyBy(10);

    return(
        <main>
            <h1>Functions</h1>
            {/* <p>{myArray[2]}</p> */}
            <p>{helloWorld("Alice", "Thursday")}</p>
            <p>{helloWorld2("Jeremy", "Wednesday")}</p>
            <p>{helloWorld3("Bob")}</p>
            <p>{helloMath(3,4)}</p>
            <h2>Higher Order Functions</h2>
            <p>{louder( helloWorld3, "Robert" )}</p>
            <p>{louder( helloWorld2, "Anne" ) }</p>
            {/* <p>{louder( "test", "Anne" ) }</p> */}
            <p>{multiplyByThree(7)}</p>
            <p>{multiplyByTen(7)}</p>
        </main>
    );
}
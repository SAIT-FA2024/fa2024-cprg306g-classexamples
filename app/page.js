
/*
MyFirstPage - Pages or Components - Capital Case
myFirstPage - Other Functions - Camel Case
*/

import Link from "next/link";
import MyFirstComponent from "./_components/my-first-component";

export default function Home() {

  let linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <main>
      <h1 className="text-3xl">CPRG306 Class Examples</h1>
      <p>Hello World!</p>
      <p>These are my class examples for CPRG306</p>
      <MyFirstComponent />
      <h2>Course Example Links</h2>
      <ul>
        <li><Link href="./week-2/" className={linkStyles}>Week 2 - Introduction to React</Link></li>
        <li><Link href="./week-3/objects" className={linkStyles}>Week 3 - Objects</Link></li>
        <li><Link href="./week-3/props" className={linkStyles}>Week 3 - Props</Link></li>
      </ul>
    </main>
  );
}

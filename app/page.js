import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="http://localhost:3000/week-2">Week 2</Link>
      <br></br>
      <Link href="http://localhost:3000/week-3">Week 3</Link>
      <br></br>
      <Link href="http://localhost:3000/week-4">Week 4</Link>
    </main>
  );
}
import Link from "next/link";
import Header from "../Header/hearder";

export default function Navigation() {
  return (
    <Header>
      <section>
        <div>{/* <Link href="spotlight">Spotlight</Link> */}</div>
        <div>{/* <Link href="art-pieces">All art pieces</Link> */}</div>
      </section>{" "}
    </Header>
  );
}

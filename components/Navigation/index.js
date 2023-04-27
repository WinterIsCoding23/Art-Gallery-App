import Link from "next/link";

export default function Navigation (){
    return (
        <container>
            <div>
                <Link href="spotlight">Spotlight</Link>
            </div>
            <div>
                <Link href="art-pieces">All art pieces</Link>
            </div>
        </container>
    )
}

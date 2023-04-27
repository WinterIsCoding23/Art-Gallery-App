import Link from "next/link";

export default function Navigation (){
    return (
        <container>
            <div>
                <Link href="./spotlight/">Spotlight</Link>
            </div>
            <div>
                <Link href="./artpieces/">You find all art pieces here:</Link>
            </div>
        </container>
    )
}